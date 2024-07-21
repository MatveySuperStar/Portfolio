/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/eng",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/eng/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
