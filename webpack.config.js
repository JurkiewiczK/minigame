const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './js/main.jsx',
    output: {
		path: __dirname + "/js",
		filename: "out.js"
	},

    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                    loader: "url-loader",
                    query: { mimetype: "image/png" }
                    }
                ]

                
                
            }
        ]
    }, 
   plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
    
}