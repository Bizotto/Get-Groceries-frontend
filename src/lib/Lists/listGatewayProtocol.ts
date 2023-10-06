import { StoreList } from '@/interfaces/StoreList';
import { UpdateList } from '@/interfaces/UpdateList';

export interface ListsGatewayProtocol {
  store(list: StoreList): Promise<StoreList>;
  update(id: string, list: UpdateList): Promise<UpdateList>;
  delete(id: string): Promise<void>;
  index(): Promise<StoreList[]>;
  indexById(id: string): Promise<StoreList>;
}
