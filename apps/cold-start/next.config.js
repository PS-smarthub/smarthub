/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  output: 'standalone'
};
 
module.exports = nextConfig;