
const path = require('path');

module.exports = {
    mode: "development",
    entry: './app/App',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-3']
                    }
                }]
            },
            {
                test:/\.css?$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                }]
            }
            ]
    },
    watch:true
};