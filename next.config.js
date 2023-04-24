/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
  },
  redirects: async () => {
    return [
      {
        source: "/b5fc0bf9d8d4409d95281c9c316d47f4",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
