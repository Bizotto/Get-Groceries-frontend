import { StoreCategory } from './StoreCategory';

export interface UpdateCategory extends StoreCategory {
  name: string;
  description: string;
}
