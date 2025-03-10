import NextAuth from "next-auth"
import { Provider } from "next-auth/providers"
import Zitadel from "next-auth/providers/zitadel"
 
const providers: Provider[] = [
  Zitadel,
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
    error: "/error",
  },
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

