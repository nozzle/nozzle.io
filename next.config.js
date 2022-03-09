const path = require('path')
const withFonts = require('next-fonts')
const withOptimizedImages = require('next-optimized-images')
// const withMDX = require('@next/mdx')({
//   // parse mdx files
//   extension: /\.mdx?$/
// })

const baseConfig = {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    disableStaticImages: true,
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.resolve.modules = [...config.resolve.modules, path.resolve('./')]
    return config
  },
}

module.exports = [withFonts, withOptimizedImages].reduce(
  (a, b) => b(a),
  baseConfig
)
