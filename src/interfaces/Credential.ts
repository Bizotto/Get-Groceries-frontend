export interface StoreCredential {
  id: string;
  username: string;
  password: string;
}

export interface CredentialResponse {
  username?: string;
  password?: string;
}
