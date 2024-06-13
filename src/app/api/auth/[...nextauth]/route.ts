import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';

const handler = NextAuth({
  pages: { signIn: 'login', signOut: 'login' },
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_PASSWORD as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      console.log('token', token);
      console.log('account', account);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
