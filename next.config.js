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
    const posts = {}
    for (var i = 0; i < 1000; i++) {
      posts[i] = { page: '/about' }
    }
    return Object.assign(
      {
        '/': { page: '/' },
        '/about': { page: '/about' },
      },
      posts
    )
  },
}
