import { StoreCategory } from '@/interfaces/StoreCategory';
import { UpdateCategory } from '@/interfaces/UpdateCategory';
import { HttpRequests } from '../httpRequests';
import { CategoriesGatewayProtocol } from './categoriesGatewayProtocol';

export class CategoriesGatewayHttp implements CategoriesGatewayProtocol {
  constructor(private readonly http: HttpRequests) {}

  async store(category: StoreCategory): Promise<StoreCategory> {
    return await this.http.post('/categories', category);
  }
  async update(id: string, category: UpdateCategory): Promise<UpdateCategory> {
    return await this.http.patch(`/categories/${id}`, category);
  }
  async delete(id: string): Promise<void> {
    return await this.http.delete(`/categories/${id}`);
  }
  async index(): Promise<StoreCategory[]> {
    return await this.http.get('/categories');
  }
  async indexById(id: string): Promise<StoreCategory> {
    return await this.http.get(`/categories/${id}`);
  }
}
