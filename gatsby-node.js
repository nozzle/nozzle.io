const path = require('path')
const axios = require('axios')

const testPath = 'https://jsonplaceholder.typicode.com/posts/'

// Webpack customization
exports.modifyWebpackConfig = ({ config, stage }) => {
  Object.assign(config._config.resolve, {
    modulesDirectories: config._config.resolve.modulesDirectories.concat([
      path.resolve('./src'),
    ]),
  })
  console.log(config)
  return config
}

exports.createPagesStatefully = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return axios.get(testPath).then(res => {
    const compPath = path.resolve('./src/templates/post.js')
    res.data.forEach(post => {
      createPage({
        path: `/post/${post.id}`,
        component: compPath,
        context: {
          post: 'hello',
        },
      })
    })
  })
}
