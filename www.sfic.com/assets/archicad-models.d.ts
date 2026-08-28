/** Modèles de contrat AZUPLIFT Web ↔ Add-On Archicad. Sans dépendance runtime. */
export type ArchicadConnectionState = 'WEB_ONLY' | 'ARCHICAD_CONNECTED' | 'ARCHICAD_ERROR';

export interface Product {
  productId: string;
  name: string;
  manufacturer?: string;
  reference?: string;
  bimAvailable?: boolean;
}

export interface BIMElement {
  elementGuid: string;
  productId?: string;
  name?: string;
  classification?: string;
  properties?: Record<string, string | number | boolean | null>;
}

export interface Quantity {
  productId: string;
  productName: string;
  reference?: string;
  quantity: number;
  unit: string;
  manufacturer?: string;
}

export interface Project {
  projectId: string;
  name?: string;
  elements: BIMElement[];
  quantities: Quantity[];
}

export interface ArchicadRequest {
  action: 'ADD_PRODUCT' | 'GET_SELECTED_ELEMENTS' | 'GET_PROJECT_DATA' | 'EXTRACT_QUANTITIES' | 'SYNC_PROJECT';
  productId?: string;
}

export interface ArchicadResponse {
  success: boolean;
  action: string;
  productId?: string;
  elementGuid?: string;
  project?: Project;
  error?: { code?: string; message: string };
}

/**
 * Cet adaptateur sera fourni et enregistré par le véritable Add-On, après
 * validation du contrat JavaScript avec le DevKit Archicad 29.3100.
 */
export interface ArchicadAdapter {
  request(request: ArchicadRequest): Promise<ArchicadResponse>;
  subscribe?(listener: (message: ArchicadResponse) => void): () => void;
}

/** Interface métier de l’API distante ; les routes HTTP seront définies côté serveur. */
export interface AzupliftApiClient {
  getProduct(productId: string): Promise<Product>;
  saveProject(project: Project): Promise<Project>;
  saveQuantities(projectId: string, quantities: Quantity[]): Promise<void>;
  syncProject(projectId: string): Promise<Project>;
}
