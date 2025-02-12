/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ["three"],
  output: "export",
};

export default nextConfig;
