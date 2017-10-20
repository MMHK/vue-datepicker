var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json');
var banner = `${pkg.name} v${pkg.version}\n${pkg.description}\n${pkg.homepage}\n@author ${pkg.author}`;

var optimist = require('optimist');
var ENV = optimist.argv.env || 'dev';

module.exports = {
    entry: {
        'vue-datepicker': ["babel-polyfill", path.join(__dirname, 'vue-datepicker.es6-1.vue')]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        library: 'VueDatepicker',
        libraryTarget: 'umd',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 versions', '0.5%']
    })],
    babel: {
        "presets": ["es2015"]
        // plugins: ["transform-object-assign"]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${ENV}"`
            }
        })
    ],
    externals: {
        'moment': 'moment',
    }
};



if (ENV === 'dev') {
    module.exports.devtool = 'source-map';
    delete module.exports.postcss;
    module.exports.output.path = path.join(__dirname, 'docs');
} else {
    module.exports.devtool = 'source-map';
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    }));
    module.exports.plugins.push(new webpack.BannerPlugin(banner));
    module.exports.output.filename = "[name].min.js";
}