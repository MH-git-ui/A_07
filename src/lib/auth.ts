import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI must be set to a MongoDB connection string.");
}

const client = new MongoClient(mongoUri);
const db = client.db("better-auth");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: mongodbAdapter(db, { client }),

  // Email + password login (no email verification / reset, per assignment)
  emailAndPassword: {
    enabled: true,
    // Note: autoSignIn:false would make BetterAuth hide "email already exists"
    // errors (it returns a fake success). We keep autoSignIn on and sign the
    // user out on the client right after sign-up instead (see SignUpForm).
  },

  // Google + GitHub social login
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});