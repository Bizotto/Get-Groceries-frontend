import { Product } from '@/interfaces/Product';

export interface ProductsGatewayProtocol {
  store(product: Product): Promise<Product>;
  update(id: string, product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
  index(): Promise<Product[]>;
  indexById(id: string): Promise<Product>;
}
