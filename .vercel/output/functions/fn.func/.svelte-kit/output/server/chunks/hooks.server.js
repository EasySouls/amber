import { D as DEV } from "./prod-ssr.js";
import { i as private_env, b as base } from "./internal.js";
import { Auth } from "@auth/core";
import Google from "@auth/core/providers/google";
import Github from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { p as prisma } from "./prisma.js";
const dev = DEV;
async function getSession(req, config) {
  config.secret ??= private_env.AUTH_SECRET;
  config.trustHost ??= true;
  const prefix = config.prefix ?? `${base}/auth`;
  const url = new URL(prefix + "/session", req.url);
  const request = new Request(url, { headers: req.headers });
  const response = await Auth(request, config);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AuthHandle(svelteKitAuthOptions) {
  return async function({ event, resolve }) {
    const authOptions = typeof svelteKitAuthOptions === "object" ? svelteKitAuthOptions : await svelteKitAuthOptions(event);
    const { prefix = `${base}/auth` } = authOptions;
    const { url, request } = event;
    event.locals.getSession ??= () => getSession(request, authOptions);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) {
      return resolve(event);
    }
    return Auth(request, authOptions);
  };
}
function SvelteKitAuth(options) {
  if (typeof options === "object") {
    options.secret ??= private_env.AUTH_SECRET;
    options.trustHost ??= !!(private_env.AUTH_TRUST_HOST ?? private_env.VERCEL ?? dev);
    options.prefix ??= `${base}/auth`;
  }
  return AuthHandle(options);
}
const AUTH_SECRET = "324778e458e8af4e60330c04557e4ae5";
const GOOGLE_CLIENT_ID = "1048576-1q2q3q4q5q6q7q8q9q.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_ID_DEV = "0e1b68133fca4722783d";
const GITHUB_SECRET_DEV = "50e4afe120ede5c55760903f4f913fc423495cfe";
const handleAuth = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
    Github({ clientId: GITHUB_ID_DEV, clientSecret: GITHUB_SECRET_DEV })
  ],
  trustHost: true,
  secret: AUTH_SECRET
});
export {
  handleAuth
};
