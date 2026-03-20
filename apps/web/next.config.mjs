/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
}

export default nextConfig
