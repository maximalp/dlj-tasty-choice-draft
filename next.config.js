/** @type {import('next').NextConfig} */
// Keep this in sync with lib/basePath.js — duplicated deliberately rather
// than shared across the CJS/ESM boundary, since it's one short string.
const nextConfig = {
  basePath: "/dljcatfood",
  allowedDevOrigins: ["10.0.0.240"],
};

module.exports = nextConfig;
