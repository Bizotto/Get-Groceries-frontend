import { CredentialResponse } from '@/interfaces/Credential';

export interface CredentialsGatewayProtocol {
  store(credential: CredentialResponse): Promise<CredentialResponse>;
}
