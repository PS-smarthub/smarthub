/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@smarthub/ui",
  ],
  env: {
    API_URL: "http://10.234.84.66:8000/api/v1",
  },
};

module.exports = nextConfig;
