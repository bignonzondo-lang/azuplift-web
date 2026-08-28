/* WebBridge AZUPLIFT 1.0. Aucun mock n'est autorisé dans le site public. */
(() => {
  const VERSION = '1.0';
  const COMMANDS = Object.freeze({
    ADD_PRODUCT: 'ADD_PRODUCT', GET_SELECTION: 'GET_SELECTION', ANALYZE_PROJECT: 'ANALYZE_PROJECT',
    GET_PROJECT_DATA: 'GET_PROJECT_DATA', SYNC_PROJECT: 'SYNC_PROJECT'
  });
  const listeners = new Set();
  let available = false;
  let retryCount = 0;

  class ArchicadBridgeError extends Error {
    constructor(code, message, archicadError) {
      super(message); this.name = 'ArchicadBridgeError'; this.code = code;
      if (Number.isInteger(archicadError)) this.archicadError = archicadError;
    }
  }
  const emitState = () => {
    const detail = { available, state: available ? 'ARCHICAD_CONNECTED' : 'WEB_ONLY' };
    listeners.forEach((listener) => listener(detail));
    window.dispatchEvent(new CustomEvent('azuplift:archicad-state', { detail }));
  };
  const detectHost = () => {
    const next = !!(window.AZUPLIFT_HOST && typeof window.AZUPLIFT_HOST.ExecuteCommand === 'function');
    if (next !== available) { available = next; emitState(); }
    if (!available && retryCount++ < 6) window.setTimeout(detectHost, 250);
    return available;
  };
  const requestId = () => window.crypto?.randomUUID?.() || `azu-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const executeArchicadCommand = async (command, payload = {}) => {
    if (!Object.values(COMMANDS).includes(command)) throw new ArchicadBridgeError('UNKNOWN_COMMAND', 'Commande Archicad non prise en charge.');
    if (!detectHost()) throw new ArchicadBridgeError('ARCHICAD_BRIDGE_UNAVAILABLE', 'Cette fonctionnalité nécessite AZUPLIFT dans Archicad.');
    const id = requestId();
    const request = { version: VERSION, requestId: id, command, payload };
    let raw;
    try { raw = await window.AZUPLIFT_HOST.ExecuteCommand(JSON.stringify(request)); }
    catch (error) { throw new ArchicadBridgeError('ARCHICAD_BRIDGE_CALL_FAILED', error?.message || 'Appel au bridge Archicad impossible.'); }
    let response;
    try { response = JSON.parse(raw); }
    catch { throw new ArchicadBridgeError('INVALID_JSON', 'Le bridge Archicad a retourné une réponse JSON invalide.'); }
    if (response?.version !== VERSION || response.requestId !== id || response.command !== command) {
      throw new ArchicadBridgeError('ARCHICAD_BRIDGE_RESPONSE_MISMATCH', 'La réponse Archicad ne correspond pas à la demande.');
    }
    if (response.success !== true) {
      throw new ArchicadBridgeError(response?.error?.code || 'UNKNOWN_ERROR', response?.error?.message || 'Erreur Archicad.', response?.error?.archicadError);
    }
    return response.data;
  };
  window.AZUPLIFT_UI = window.AZUPLIFT_UI || {};
  window.AZUPLIFT_UI.onSelectionChanged = () => window.dispatchEvent(new CustomEvent('azuplift:selection-changed'));
  window.AzupliftArchicadBridge = Object.freeze({
    VERSION, COMMANDS, ArchicadBridgeError, isArchicadAvailable: detectHost,
    onStateChange(listener) { listeners.add(listener); listener({ available, state: available ? 'ARCHICAD_CONNECTED' : 'WEB_ONLY' }); return () => listeners.delete(listener); },
    executeArchicadCommand,
    addProductToArchicad: (productId) => executeArchicadCommand(COMMANDS.ADD_PRODUCT, { productId }),
    getSelectedElements: () => executeArchicadCommand(COMMANDS.GET_SELECTION),
    analyzeProject: () => executeArchicadCommand(COMMANDS.ANALYZE_PROJECT),
    getProjectData: (options = {}) => executeArchicadCommand(COMMANDS.GET_PROJECT_DATA, options),
    syncProject: () => executeArchicadCommand(COMMANDS.SYNC_PROJECT)
  });
  detectHost();
})();
