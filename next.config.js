const path = require('path')
const Dotenv = require('dotenv-webpack')
const alias = {
  '@/components': path.join(__dirname, 'client', 'components'),
  '@/containers': path.join(__dirname, 'client', 'containers'),
  '@/utils': path.join(__dirname, 'client', 'utils'),
  '@/store': path.join(__dirname, 'client', 'store'),
  '@/styles': path.join(__dirname, 'client', 'scss')
}

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'client/scss')]
  },
  images: {
    domains: ['source.unsplash.com', 'api.lapangan.id', 'lapangan.io']
  },
  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    config.resolve.alias = Object.assign(
      {},
      config.resolve.alias,
      alias
    )

    return config
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}
