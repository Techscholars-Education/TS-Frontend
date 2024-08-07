/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com.com",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "techscholar.s3.amazonaws.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dashboard/testseries/purchased",
        destination: "/dashboard/testseries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
