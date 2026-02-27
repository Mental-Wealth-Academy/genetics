/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/proxy/snpedia-db',
        destination: 'https://static.snpbrowser.com/snpedia.db',
      },
    ];
  },
  webpack: (config, { isServer, webpack }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    if (!isServer) {
      config.module.rules.push({
        test: /\.glsl$/,
        use: 'raw-loader',
      });
    }
    return config;
  },
};

module.exports = nextConfig;
