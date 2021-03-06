const path = require('path')
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')
module.exports =function(baseConfig,env)  {
    const config = genDefaultConfig(baseConfig, env)

    
    function resolve(dir) {
        return path.join(__dirname, '..', dir)
     }
       
    
     config.module =  {
		rules: [
			// Transform all ES6 files to plain old ES5.
			{
				test: /\.(js|jsx)$/,
				exclude: [/bower_components/, /node_modules/, /styles/],
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src/')
			},
			// Load images.
			{
				test: /\.(gif|jpe?g|png)$/,
				loader: 'url-loader?limit=25000',
				query: {
					limit: 10000,
					name: 'static/media/images/[name].[hash:8].[ext]'
                },
                include: path.resolve(__dirname, 'src/')
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
				include: path.resolve(__dirname, 'src/')
			},
			{
				test: /\.css$/,
                loader: 'style!css?importLoaders=1',
                include: path.resolve(__dirname, 'src/')
        
			},
			// Fonts
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
				query: {
					name: 'static/media/files/[name].[hash:8].[ext]'
                },
                include: path.resolve(__dirname, 'src/')
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['airbnb'],
						},
					},
					{
						loader: 'react-svg-loader',
						query: {
							jsx: true,
						},
					},
				],
			},
		],
	},

	config.resolve =  {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src/'),
      },
	}

return config 
};