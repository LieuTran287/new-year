/** @type {import('next').NextConfig} */
const repoName = "new-year"; // tên repo GitHub

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
