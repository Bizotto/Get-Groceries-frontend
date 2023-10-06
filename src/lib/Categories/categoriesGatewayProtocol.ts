import { StoreCategory } from '@/interfaces/StoreCategory';
import { UpdateCategory } from '@/interfaces/UpdateCategory';

export interface CategoriesGatewayProtocol {
  store(category: StoreCategory): Promise<StoreCategory>;
  update(id: string, category: UpdateCategory): Promise<UpdateCategory>;
  delete(id: string): Promise<void>;
  index(): Promise<StoreCategory[]>;
  indexById(id: string): Promise<StoreCategory>;
}
