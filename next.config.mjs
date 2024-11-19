/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.freepik.com',
      '67kbtiuxase3xqul.public.blob.vercel-storage.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    })
    return config
  },
}

export default nextConfig
