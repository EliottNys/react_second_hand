import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // credentials({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     // check in db
    //     // okay ? => return user, something like this:
    //     // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    //     return null;
    //   },
    // }),
  ],
  session: { strategy: "jwt" }, //session is stored in cookie (default)
  callbacks: {
    async redirect(params) {
      const { url, baseUrl } = params;
      return baseUrl;
    },
  },
});
