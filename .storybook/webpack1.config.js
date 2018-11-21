const path = require('path')
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)
  function resolve(dir) {
     return path.join(__dirname, '..', dir)
  }
  config.resolve = {
    extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src/'),
    },
  }
  return config
}
// module.exports = {
//     entry: './app/assets/frontend/main.jsx',
//     output: {
//       path: __dirname + '/app/assets/javascripts',
//       filename: 'bundle.js'
//     },
//     resolve: {
//       extensions: ['', '.js', '.jsx']
//     },
//     module: {
//       loaders: [
//         {
//           test: /\.jsx?$/,
//           loader: 'babel',
//           exclude: /node_modules/,
//           query: {
//             cacheDirectory: true,
//             presets: ['react', 'es2015']
//           }
//         }
//       ]
//     }
//   }