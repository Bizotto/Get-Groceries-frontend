import { GITHUB_ID, GITHUB_SECRET } from '@/constants/credentials';
import { api } from '@/lib';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Your name here',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = api.CredentialsGateway.store({
          username: credentials?.username,
          password: credentials?.password,
        });
        const user = await JSON.parse(res as any);
        if (user) return user;
        return null;
      },
    }),
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};
