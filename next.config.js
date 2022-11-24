/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["sl", "en", "esp", "de", "fr"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
