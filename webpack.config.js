const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const generateFontConfig = require('./webpack/generateFontConfig').generateFontConfig;

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public'),
};

const FONTS = [
    {
        name: 'muli',
        styles: ['bold', 'italic', 'regular']
    }
];

module.exports = {
    entry: `${PATHS.source}/index.js`,

    output: {
        path: PATHS.build,
        filename: 'js/[name].js',
        publicPath: '/'
    },

    mode: NODE_ENV === 'development' ? 'development' : 'production',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new CleanWebpackPlugin(['public']),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            title: 'Engineering Jam 3 Geography',
            template: path.join(PATHS.source, '/index.ejs'),
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                sortAttributes: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyCSS: true
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: PATHS.source,
                loader: 'babel-loader',
                sideEffects: false
            },
            {
                test: /\.scss$/,
                include: PATHS.source,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                include: path.join(PATHS.source, '/ui/assets/svg/file'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        },
                    },
                    'svgo-loader'
                ],
            },
            {
                test: /\.svg$/,
                include: path.join(PATHS.source, 'ui', 'assets', 'svg', 'sprite'),
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: NODE_ENV === 'production'
                        },
                    },
                    'svgo-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.join(PATHS.source, '/ui/assets/img'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    },
                ],
            }
        ]
    },

    devServer: {
        stats: 'errors-only',
        host: '0.0.0.0',
        port: 3000,
        contentBase: PATHS.build,
        hot: true,
        historyApiFallback: true
    },
};

const fontConfig = generateFontConfig({PATHS, FONTS}); // Dynamic font rules generation

fontConfig.forEach((item) => module.exports.module.rules.push(item));

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                beautify: false,
                comments: false,
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    );

    module.exports.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    );

    module.exports.plugins.push(
        new SpriteLoaderPlugin({
            spriteAttrs: {
                width: 0,
                height: 0,
                style: 'position:absolute'
            }
        })
    );

    module.exports.plugins.push(
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.source, 'ui', 'assets', 'img', '*'),
                to: path.join(PATHS.build, 'images'), flatten: true
            }
        ], {})
    );

    module.exports.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }
    );
}
