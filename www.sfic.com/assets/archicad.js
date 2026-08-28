document.addEventListener('DOMContentLoaded', () => {
  const bridge = window.AzupliftArchicadBridge;
  const feedback = document.querySelector('[data-archicad-feedback]');
  const indicator = document.querySelector('[data-connection-state]');
  const setFeedback = (message, type = '') => { feedback.textContent = message; feedback.className = `archicad-feedback ${type}`; };
  const setConnection = ({ available }) => {
    indicator.dataset.state = available ? 'ARCHICAD_CONNECTED' : 'WEB_ONLY';
    indicator.querySelector('span').textContent = available ? 'Archicad connecté' : 'Ouvert dans le navigateur';
    document.querySelector('[data-home-status]').textContent = available ? 'Le bridge AZUPLIFT est connecté à Archicad.' : 'Cette interface doit être ouverte dans Archicad pour accéder à la maquette.';
  };
  bridge.onStateChange(setConnection);
  const renderSelection = (data) => {
    const output = document.querySelector('[data-selection-output]');
    if (!data.count) { output.textContent = 'Aucun objet sélectionné dans Archicad.'; return; }
    output.textContent = `${data.count} objet(s) sélectionné(s) : ${data.elements.map((element) => `${element.type} (${element.elementId || element.guid})`).join(', ')}.`;
  };
  const renderAnalysis = (data) => {
    document.querySelector('[data-analysis-output]').textContent = `${data.project?.name || 'Projet'} · ${data.totalElements} élément(s). Comptage par type Archicad, pas encore un quantitatif commercial AZUPLIFT.`;
    const table = document.querySelector('.archicad-quantities'), body = document.querySelector('[data-quantities-output]');
    body.replaceChildren(...(data.quantities || []).map((item) => { const row = document.createElement('tr'); [item.type, item.quantity, item.unit].forEach((value) => { const cell = document.createElement('td'); cell.textContent = String(value); row.append(cell); }); return row; }));
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
  let selectionTimer;
  window.addEventListener('azuplift:selection-changed', () => { window.clearTimeout(selectionTimer); selectionTimer = window.setTimeout(() => { const button = document.querySelector('[data-command="GET_SELECTION"]'); if (button && !button.disabled) run(button, 'GET_SELECTION'); }, 180); });
  document.querySelector('#archicad-search').addEventListener('submit', (event) => { event.preventDefault(); const term = document.querySelector('#archicad-query').value.trim().toLocaleLowerCase('fr'); const products = [...document.querySelectorAll('.archicad-product')]; const count = products.reduce((total, product) => { const visible = !term || product.textContent.toLocaleLowerCase('fr').includes(term); product.hidden = !visible; return total + Number(visible); }, 0); document.querySelector('#archicad-search-result').textContent = `${count} produit${count === 1 ? '' : 's'} BIM trouvé${count === 1 ? '' : 's'}.`; });
});
