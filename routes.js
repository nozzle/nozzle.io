const routes = require('next-routes')()

routes
  .add('/rank-tracker-comparison', 'rank-tracker-comparison')
  .add('/features', 'features')
  .add('/pricing', 'pricing')
  .add('/about', 'about')
  .add('/devblog', 'devblog')
  .add('/devblog/post/:slug', 'devblog-post')
  .add('/devblog/category/:slug', 'devblog-category')

module.exports = routes
