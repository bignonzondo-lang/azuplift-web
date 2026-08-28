/*
 * Façade Web AZUPLIFT. Elle ne contient aucune API C++ ni transport Archicad.
 * Le véritable Add-On devra enregistrer un adaptateur après accord sur ce
 * contrat : window.AzupliftArchicadBridge.registerAdapter(adapter).
 */
(() => {
  const STATES = Object.freeze({ WEB_ONLY: 'WEB_ONLY', CONNECTED: 'ARCHICAD_CONNECTED', ERROR: 'ARCHICAD_ERROR' });
  let adapter = null;
  let state = STATES.WEB_ONLY;
  const listeners = new Set();

  const notify = (detail) => {
    listeners.forEach((listener) => listener(detail));
    window.dispatchEvent(new CustomEvent('azuplift:archicad-state', { detail }));
  };

  const setState = (nextState, error = null) => {
    state = nextState;
    notify({ state, error });
  };

  const unavailable = () => {
    const error = new Error('Cette fonctionnalité nécessite le plugin AZUPLIFT pour Archicad.');
    error.code = 'ARCHICAD_UNAVAILABLE';
    return Promise.reject(error);
  };

  const request = (payload) => {
    if (!adapter || typeof adapter.request !== 'function') return unavailable();
    return Promise.resolve(adapter.request(payload)).catch((error) => {
      setState(STATES.ERROR, error?.message || 'Erreur de communication avec Archicad.');
      throw error;
    });
  };

  const bridge = {
    STATES,
    isArchicadAvailable: () => state === STATES.CONNECTED && !!adapter,
    getConnectionState: () => state,
    onStateChange: (listener) => {
      listeners.add(listener);
      listener({ state });
      return () => listeners.delete(listener);
    },
    registerAdapter: (nextAdapter) => {
      if (!nextAdapter || typeof nextAdapter.request !== 'function') {
        throw new TypeError('L’adaptateur Archicad doit fournir une méthode request().');
      }
      adapter = nextAdapter;
      if (typeof adapter.subscribe === 'function') adapter.subscribe(bridge.receiveMessage);
      setState(STATES.CONNECTED);
    },
    clearAdapter: () => { adapter = null; setState(STATES.WEB_ONLY); },
    receiveMessage: (message) => {
      window.dispatchEvent(new CustomEvent('azuplift:archicad-message', { detail: message }));
      return message;
    },
    addProductToArchicad: (productId) => request({ action: 'ADD_PRODUCT', productId }),
    getSelectedElements: () => request({ action: 'GET_SELECTED_ELEMENTS' }),
    getProjectData: () => request({ action: 'GET_PROJECT_DATA' }),
    extractQuantities: () => request({ action: 'EXTRACT_QUANTITIES' }),
    syncProject: () => request({ action: 'SYNC_PROJECT' })
  };

  window.AzupliftArchicadBridge = Object.freeze(bridge);
})();
