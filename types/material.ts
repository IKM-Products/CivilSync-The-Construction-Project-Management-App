export interface Material {
  id: string;
  projectId: string;

  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;

  supplier?: string;
  description?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMaterialData {
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  supplier?: string;
  description?: string;
}

export interface UpdateMaterialData
  extends Partial<CreateMaterialData> {}

export interface MaterialStock {
  materialId: string;
  availableQuantity: number;
  usedQuantity: number;
  remainingQuantity: number;
}

export interface MaterialSummary {
  totalMaterials: number;
  totalStockValue: number;
}