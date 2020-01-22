const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  {
    target: 'serverless',
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10e4
            }
          }
        ]
      })

      return config
    }
  }
])
