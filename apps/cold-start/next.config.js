/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@smarthub/ui",
    // '@bosch-web-dds/spark-ui',
    // '@bosch-web-dds/spark-ui-react'
  ],
  env: {
    API_URL: "http://10.234.84.66:8000/api/v1",
  },
};

module.exports = nextConfig;
