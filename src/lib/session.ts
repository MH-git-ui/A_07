import { headers } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { getAuth } from "./auth";

export async function getSession() {
  await connection();
  return getAuth().api.getSession({ headers: await headers() });
}

/** Server-side guard: returns the session or redirects to /signin (then back to `path`). */
export async function requireSession(path: string) {
  const session = await getSession();
  if (!session) {
    redirect(`/signin?redirect=${encodeURIComponent(path)}&reason=protected`);
  }
  return session;
}
