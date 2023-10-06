import { StoreList } from '@/interfaces/StoreList';
import { UpdateList } from '@/interfaces/UpdateList';
import { HttpRequests } from '../httpRequests';
import { ListsGatewayProtocol } from './listGatewayProtocol';

export class ListGatewayHttp implements ListsGatewayProtocol {
  constructor(private readonly http: HttpRequests) {}

  async store(list: StoreList): Promise<StoreList> {
    return await this.http.post(`/lists`, list);
  }
  async update(id: string, list: UpdateList): Promise<UpdateList> {
    return await this.http.patch(`/lists/${id}`, list);
  }
  async delete(id: string): Promise<any> {
    return await this.http.delete(`/lists/${id}`);
  }
  async index(): Promise<StoreList[]> {
    return await this.http.get('/lists');
  }
  async indexById(id: string): Promise<StoreList> {
    return await this.http.get(`/lists/${id}`);
  }
}
