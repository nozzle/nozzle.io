// next.config.js
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader',
    })
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
}
