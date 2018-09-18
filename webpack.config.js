// entry -> ouput

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
const isProductoin = env === 'production';
const CSSExtract = new ExtractTextPlugin('styles.css');

  return  {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProductoin ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }; 
};


// Loaders : for example, using babel through webpack

// ** fully restart webpack  when you change the configuration