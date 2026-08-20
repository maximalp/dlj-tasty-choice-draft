// Keep this in sync with the basePath in next.config.js — duplicated
// deliberately rather than shared across the CJS/ESM boundary, since
// it's one short string. next/link and next/image get this prefix
// automatically from Next.js; raw fetch() calls with hardcoded paths
// do not, which is what this constant is for.
export const BASE_PATH = "/dljcatfood";
