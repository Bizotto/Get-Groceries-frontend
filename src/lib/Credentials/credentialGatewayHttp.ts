import { CredentialResponse } from '@/interfaces/Credential';
import { HttpRequests } from '../httpRequests';
import { CredentialsGatewayProtocol } from './credentialProtocol';

export class CredentialsGatewayHttp implements CredentialsGatewayProtocol {
  constructor(private readonly http: HttpRequests) {}

  store(credential: CredentialResponse): Promise<CredentialResponse> {
    return this.http.post('/credentials', credential);
  }
}
