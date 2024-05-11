import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectToMongoDb from "@/db/connectDb";
import userSchema from "@/models/userSchema";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        connectToMongoDb();
        const currentUser = await userSchema.findOne({ email: email });
        if (!currentUser) {
          const newUser = await userSchema.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
      }
      return true;
    },
    async session({ session, user, token }) {
      const dbUser = await userSchema.find({ email: session.user.email });
      session.user.usename = dbUser.username;
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
