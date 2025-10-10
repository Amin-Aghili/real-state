/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESlint errors.
    ignoreDuringBuilds: true,
  },
};
>>>>>>> a21939bc94aa099285239fd1547391c3c632ebf1

export default nextConfig;
