export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  categoryId: string;
}

export interface CreateProductInput {
  name: string;
  categoryId?: string;
}
