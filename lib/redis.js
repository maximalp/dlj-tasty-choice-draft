import { Redis } from "@upstash/redis";

let client;

function getClient() {
  if (client) return client;

  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    console.warn(
      "Redis env vars are missing. Add the Upstash for Redis integration " +
        "from the Vercel Storage tab, or fill in .env.local for local dev."
    );
  }

  client = new Redis({ url, token });
  return client;
}

export const redis = new Proxy(
  {},
  {
    get(_target, prop) {
      return getClient()[prop];
    },
  }
);

export const KEYS = {
  flavors: "dlj:flavors",
  positions: "dlj:positions",
  locked: "dlj:locked",
  revealed: "dlj:revealed",
  claims: "dlj:claims",
};
