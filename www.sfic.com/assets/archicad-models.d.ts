export type ArchicadCommand = 'GET_SELECTION' | 'ANALYZE_PROJECT' | 'ADD_PRODUCT' | 'GET_PROJECT_DATA' | 'SYNC_PROJECT';
export type BridgeRequest = { version: '1.0'; requestId: string; command: ArchicadCommand; payload: Record<string, unknown> };
export type BridgeError = { code: string; message: string; archicadError?: number };
export type BridgeSuccess<T> = { version: '1.0'; requestId: string; command: ArchicadCommand; success: true; data: T };
export type BridgeFailure = { version: '1.0'; requestId: string; command: ArchicadCommand; success: false; error: BridgeError };
export type BridgeResponse<T> = BridgeSuccess<T> | BridgeFailure;
export interface BIMElement { guid: string; type: string; elementId: string; productId: string; classificationsRead: boolean; propertiesRead: boolean; propertiesTruncated: boolean; dimensionsRead: boolean; classifications: unknown[]; properties: unknown[]; dimensions: unknown[] }
export interface ProjectData { project: { name: string }; totalAvailable: number; returned: number; truncated: boolean; elements: BIMElement[] }
export interface ProjectAnalysis { project: { name: string }; totalElements: number; grouping: 'ARCHICAD_ELEMENT_TYPE'; quantities: Array<{ type: string; quantity: number; unit: string }> }
declare global { interface Window { AZUPLIFT_HOST?: { ExecuteCommand(requestJson: string): Promise<string>; GetBridgeInfo?(): Promise<[string, string]> }; AZUPLIFT_UI?: { onSelectionChanged(): void } } }
export {};
