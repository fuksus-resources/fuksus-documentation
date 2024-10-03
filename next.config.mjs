const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/fuksus-documentation" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "export",
  assetPrefix,
  basePath: assetPrefix,
};

export default nextConfig;
