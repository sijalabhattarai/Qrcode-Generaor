/** @type {import('next').NextConfig} */
const nextConfig = {}

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@app'] = path.join(__dirname, 'src/app');
    return config;
  },
};