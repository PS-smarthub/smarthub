/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@smarthub/ui',
    '@bosch-web-dds/spark-ui', 
    '@bosch-web-dds/spark-ui-react'
  ],
  output: 'standalone'
};
 
module.exports = nextConfig;