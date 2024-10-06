import GoogleProvider from 'next-auth/providers/google';

export const authOptions = ({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
        session.user.id = token.sub
        return session
    }
  }
});
