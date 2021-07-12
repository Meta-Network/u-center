const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withPlugins([
  [ withImages ]
], nextConfig);

