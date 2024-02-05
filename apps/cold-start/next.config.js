/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@repo/ui",
    '@bosch-web-dds/spark-ui', 
    '@bosch-web-dds/spark-ui-react'
  ],
  output: 'standalone'
};
 
module.exports = nextConfig;