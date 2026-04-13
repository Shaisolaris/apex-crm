/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apex-crm',
  assetPrefix: '/apex-crm/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
