import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
});

export { authoptions as GET, authoptions as POST };
