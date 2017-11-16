var path = require('path');

//want to transform JSX and ES2015 into vanilla javascript

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: { //packaging javascript and outputting it
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js', //puts all code transferred to one file name this
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, //which files we want loader to work on
                include: path.resolve(__dirname, 'src'), //which directory we want to run loader on
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] //want it to look out for react and js2015
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
