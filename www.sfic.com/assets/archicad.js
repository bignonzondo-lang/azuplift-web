document.addEventListener('DOMContentLoaded', () => {
  const bridge = window.AzupliftArchicadBridge;
  const feedback = document.querySelector('[data-archicad-feedback]');
  const indicator = document.querySelector('[data-connection-state]');
  const stateText = { WEB_ONLY: 'Mode Web', ARCHICAD_CONNECTED: 'Connecté à Archicad', ARCHICAD_ERROR: 'Erreur Archicad' };
  const showFeedback = (message, type = '') => {
    feedback.textContent = message;
    feedback.className = `archicad-feedback ${type}`;
  };
  const renderState = ({ state, error }) => {
    indicator.dataset.state = state;
    indicator.querySelector('span').textContent = stateText[state] || stateText.WEB_ONLY;
    if (error) showFeedback(error, 'is-error');
  };
  bridge.onStateChange(renderState);

  const renderQuantities = (quantities = []) => {
    const table = document.querySelector('.archicad-quantities');
    const empty = document.querySelector('[data-quantities-empty]');
    const output = document.querySelector('[data-quantities-output]');
    output.replaceChildren(...quantities.map((item) => {
      const row = document.createElement('tr');
      [item.productName, item.reference || '—', item.quantity, item.unit].forEach((value) => {
        const cell = document.createElement('td'); cell.textContent = String(value); row.append(cell);
      });
      return row;
    }));
    table.hidden = quantities.length === 0;
    empty.hidden = quantities.length > 0;
  };
  const renderProject = (project) => {
    const output = document.querySelector('[data-project-output]');
    if (!project) return;
    output.textContent = `${project.name || 'Projet Archicad'} · ${project.elements?.length || 0} élément(s) reçus.`;
    if (project.quantities) renderQuantities(project.quantities);
  };
  const run = async (action, productId) => {
    try {
      const result = action === 'ADD_PRODUCT' ? await bridge.addProductToArchicad(productId) : await ({ GET_PROJECT_DATA: bridge.getProjectData, EXTRACT_QUANTITIES: bridge.extractQuantities, SYNC_PROJECT: bridge.syncProject }[action]());
      if (!result?.success) throw new Error(result?.error?.message || 'La demande n’a pas pu être traitée.');
      if (result.project) renderProject(result.project);
      showFeedback(action === 'ADD_PRODUCT' ? 'Produit transmis à Archicad.' : 'Données Archicad reçues.', 'is-success');
    } catch (error) {
      showFeedback(error.message || 'Cette fonctionnalité nécessite le plugin AZUPLIFT pour Archicad.', 'is-error');
    }
  };
  document.querySelectorAll('.archicad-add').forEach((button) => button.addEventListener('click', () => run('ADD_PRODUCT', button.dataset.productId)));
  document.querySelectorAll('[data-archicad-action]').forEach((button) => button.addEventListener('click', () => run(button.dataset.archicadAction)));
  document.querySelector('#archicad-search').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.querySelector('#archicad-query').value.trim().toLocaleLowerCase('fr');
    const products = [...document.querySelectorAll('.archicad-product')];
    const count = products.reduce((total, product) => {
      const visible = !query || product.textContent.toLocaleLowerCase('fr').includes(query);
      product.hidden = !visible;
      return total + Number(visible);
    }, 0);
    document.querySelector('#archicad-search-result').textContent = `${count} produit${count === 1 ? '' : 's'} BIM trouvé${count === 1 ? '' : 's'}.`;
  });
  window.addEventListener('azuplift:archicad-message', (event) => {
    const message = event.detail;
    if (message?.project) renderProject(message.project);
    if (message?.success && message.action === 'PRODUCT_ADDED') showFeedback('Produit ajouté à la maquette Archicad.', 'is-success');
  });
});
