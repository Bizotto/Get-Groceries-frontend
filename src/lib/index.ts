import { CategoriesGatewayHttp } from './Categories/categoriesGatewayHttp';
import { CredentialsGatewayHttp } from './Credentials/credentialGatewayHttp';
import { ListGatewayHttp } from './Lists/listGatewayHttp';
import { ProductsGatewayHttp } from './Products/productsGatewayHttp';
import { AxiosAdapter } from './axiosAdapter';

const baseUrl = 'http://localhost:3333';

const ApiHttp = new AxiosAdapter(baseUrl || '');

const ListGateway = new ListGatewayHttp(ApiHttp);
const CategoriesGateway = new CategoriesGatewayHttp(ApiHttp);
const ProductsGateway = new ProductsGatewayHttp(ApiHttp);
const CredentialsGateway = new CredentialsGatewayHttp(ApiHttp);

export const api = {
  ListGateway,
  CategoriesGateway,
  ProductsGateway,
  CredentialsGateway,
  axios: ApiHttp.axios,
};
