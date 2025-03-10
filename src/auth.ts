import NextAuth from "next-auth"
import Zitadel from "next-auth/providers/zitadel"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Zitadel],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // persist the id_token
        token.id_token = account.id_token
      }
      return token
    },
    session({ session, token }) {
      return { ...session, ...token }
    },
  }
})

