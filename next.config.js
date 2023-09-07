/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    pageDataCollectionTimeout: 10000, // Aumenta el tiempo de espera según sea necesario
  },
  // Agrega la configuración unstable_includeFiles aquí
  unstable_includeFiles: [
    'node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)',
  ],
};

module.exports = nextConfig;
