import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { promises as fs } from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

// For a production app, you would use a real database here
// This is just a simple file-based storage for demo purposes
async function getUsers() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/users.json');
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const users = await getUsers();
        const user = users.find((user: Record<string, unknown>) => user.email === credentials.email);

        if (!user || !(await bcrypt.compare(credentials.password, user.password as string))) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id as string,
          name: user.name as string,
          email: user.email as string,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as Record<string, unknown>).id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };