import NextAuth from 'next-auth';
import { signIn } from 'next-auth/react';
import { options } from './options';

const handler = NextAuth(options);
export const login = signIn('Credentials', {
  redirect: true,
  callbackUrl: 'http://localhost:3000/',
});

export { handler as GET, handler as POST };
