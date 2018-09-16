// entry -> ouput

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/, //files that end with .js
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.s?css/, // set the rule, import in app.js, serve
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// Loaders : for example, using babel through webpack

// ** fully restart webpack  when you change the configuration