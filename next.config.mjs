/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESlint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
