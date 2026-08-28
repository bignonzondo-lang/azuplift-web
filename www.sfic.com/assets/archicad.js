document.addEventListener('DOMContentLoaded', () => {
  const bridge = window.AzupliftArchicadBridge;
  const feedback = document.querySelector('[data-archicad-feedback]');
  const productFeedback = document.querySelector('[data-product-feedback]');
  const indicator = document.querySelector('[data-connection-state]');
  const setFeedback = (message, type = '') => { feedback.textContent = message; feedback.className = `archicad-feedback ${type}`; };
  const setProductFeedback = (message, type = '') => { productFeedback.textContent = message; productFeedback.className = `archicad-product-feedback ${type}`; };
  const setConnection = ({ available }) => {
    indicator.dataset.state = available ? 'ARCHICAD_CONNECTED' : 'WEB_ONLY';
    indicator.querySelector('span').textContent = available ? 'Archicad connecté' : 'Ouvert dans le navigateur';
    document.querySelector('[data-home-status]').textContent = available ? 'Le bridge AZUPLIFT est connecté à Archicad.' : 'Cette interface doit être ouverte dans Archicad pour accéder à la maquette.';
  };
  bridge.onStateChange(setConnection);
  const renderSelection = (data) => {
    const output = document.querySelector('[data-selection-output]');
    if (!data.count) { output.textContent = `Aucun objet AZUPLIFT dans la sélection (${data.selectedCount || 0} élément(s) sélectionné(s) au total).`; return; }
    output.textContent = `${data.count} objet(s) AZUPLIFT sélectionné(s) : ${data.elements.map((element) => `${element.productId} (${element.elementId || element.guid})`).join(', ')}.`;
  };
  const renderAnalysis = (data) => {
    document.querySelector('[data-analysis-output]').textContent = `${data.project?.name || 'Projet'} · ${data.totalAzupliftElements || 0} objet(s) AZUPLIFT sur ${data.totalElements || 0} élément(s) dans la maquette.`;
    const table = document.querySelector('.archicad-quantities'), body = document.querySelector('[data-quantities-output]');
    body.replaceChildren(...(data.quantities || []).map((item) => { const row = document.createElement('tr'); [item.productId, item.name, item.manufacturer, item.quantity, item.unit].forEach((value) => { const cell = document.createElement('td'); cell.textContent = String(value || '—'); row.append(cell); }); return row; }));
    table.hidden = !(data.quantities || []).length;
  };
  const renderProject = (data) => { document.querySelector('[data-project-output]').textContent = `${data.project?.name || 'Projet'} · ${data.returned}/${data.totalAvailable} élément(s) retournés${data.truncated ? ' (liste tronquée)' : ''}.`; };
  const run = async (button, command) => {
    button.disabled = true; button.dataset.originalText ||= button.textContent; button.textContent = 'Chargement…';
    try {
      const data = await bridge.executeArchicadCommand(command, command === 'GET_PROJECT_DATA' ? { maxElements: 100, includeClassifications: false, includeProperties: false } : {});
      if (command === 'GET_SELECTION') renderSelection(data);
      if (command === 'ANALYZE_PROJECT') renderAnalysis(data);
      if (command === 'GET_PROJECT_DATA') renderProject(data);
      setFeedback('Résultat reçu depuis Archicad.', 'is-success');
    } catch (error) { setFeedback(`${error.code || 'ARCHICAD_ERROR'} : ${error.message || 'Erreur Archicad.'}`, 'is-error'); }
    finally { button.disabled = false; button.textContent = button.dataset.originalText; }
  };
  document.querySelectorAll('[data-command]').forEach((button) => button.addEventListener('click', () => run(button, button.dataset.command)));
  document.querySelectorAll('[data-add-product]').forEach((button) => button.addEventListener('click', async () => {
    button.disabled = true; button.dataset.originalText ||= button.textContent; button.textContent = 'Placement en cours…';
    setProductFeedback('Cliquez maintenant sur un point dans la zone de dessin Archicad. Échap annule le placement.', 'is-pending');
    try {
      const data = await bridge.addProductToArchicad(button.dataset.addProduct);
      const message = `Objet placé dans Archicad : ${data.productId} · ${data.elementGuid}.`;
      setProductFeedback(message, 'is-success'); setFeedback(message, 'is-success');
    } catch (error) { const message = `${error.code || 'ARCHICAD_ERROR'} : ${error.message || 'Erreur Archicad.'}`; setProductFeedback(message, 'is-error'); setFeedback(message, 'is-error'); }
    finally { button.disabled = false; button.textContent = button.dataset.originalText; }
  }));
  let selectionTimer;
  window.addEventListener('azuplift:selection-changed', () => { window.clearTimeout(selectionTimer); selectionTimer = window.setTimeout(() => { const button = document.querySelector('[data-command="GET_SELECTION"]'); if (button && !button.disabled) run(button, 'GET_SELECTION'); }, 180); });
  document.querySelector('#archicad-search').addEventListener('submit', (event) => { event.preventDefault(); const term = document.querySelector('#archicad-query').value.trim().toLocaleLowerCase('fr'); const products = [...document.querySelectorAll('.archicad-product')]; const count = products.reduce((total, product) => { const visible = !term || product.textContent.toLocaleLowerCase('fr').includes(term); product.hidden = !visible; return total + Number(visible); }, 0); document.querySelector('#archicad-search-result').textContent = `${count} produit${count === 1 ? '' : 's'} BIM trouvé${count === 1 ? '' : 's'}.`; });
});
