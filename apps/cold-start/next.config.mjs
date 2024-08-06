/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@smarthub/ui",
    "@smarthub/fonts"
  ],
  output: "standalone"
};

export default nextConfig
