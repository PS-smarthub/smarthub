/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        "@smarthub/ui"
    ],
    experimental: {
        swcMinify: true
    }
};

export default nextConfig;
