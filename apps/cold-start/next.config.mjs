/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@smarthub/ui",
  ],
  env: {
    API_URL: "http://10.234.83.16:8000/api/v1",
  },
};

export default nextConfig
