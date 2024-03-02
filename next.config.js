/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
})
