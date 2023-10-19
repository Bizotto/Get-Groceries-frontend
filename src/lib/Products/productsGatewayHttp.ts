import { CreateProductInput, Product } from '@/interfaces/Product';
import { HttpRequests } from '../httpRequests';
import { ProductsGatewayProtocol } from './productsGatewayProtocol';

export class ProductsGatewayHttp implements ProductsGatewayProtocol {
  constructor(private readonly http: HttpRequests) {}

  async update(id: string, product: Product): Promise<Product> {
    return await this.http.patch(`/products/${id}`, product);
  }

  async delete(id: string): Promise<void> {
    return await this.http.delete(`/products/${id}`);
  }

  async index(): Promise<Product[]> {
    return await this.http.get('/products');
  }

  async indexById(id: string): Promise<Product> {
    return await this.http.get(`/products/${id}`);
  }

  async store(product: CreateProductInput): Promise<Product> {
    return await this.http.post('/products', product);
  }
}
