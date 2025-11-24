// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };


// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for development
  experimental: {
    appDir: true, // Enables support for the `app/` directory, which is required for Next.js 13+
  },
};

export default nextConfig;
