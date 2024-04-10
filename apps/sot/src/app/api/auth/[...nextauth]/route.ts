import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    AzureADProvider({
      clientId: "d3e5ad7f-3183-4811-a01c-b1ad27a3736d",
      clientSecret: "XVa8Q~WUNhs~rbbreSqEnLm1b79NZsEusLqRcaj-",
      tenantId: "0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
      idToken: true,
      authorization: {
        url: "http://localhost:3002",
        params: {
          redirect_uri: "http://localhost:3002/",
          scope: "User.Read ChannelMessage.Send Chat.Create User.ReadBasic.All",
          response_type: "token",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return "/";
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true, // O cookie só é acessível no servidor
        maxAge: 60 * 60 * 24 * 7, // Tempo de vida do cookie (7 dias)
        path: "/", // Caminho do cookie
        sameSite: "lax", // Configuração SameSite para segurança
      },
    },
  },
});

export { handler as GET, handler as POST };
