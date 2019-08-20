const path = require('path');
let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const PATH_TO_ROOT = path.resolve(__dirname, '..');

/**
 * The common webpack configuration settings,
 * shared by both `main` & `renderer` compilers.
 *
 * @type {webpack.Configuration}
 */
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@src': path.resolve(PATH_TO_ROOT, 'src'),
            '@main': path.resolve(PATH_TO_ROOT, 'src/main/'),
            '@renderer': path.resolve(PATH_TO_ROOT, 'src/renderer/'),
        }
    },
    plugins: [
        new LodashModuleReplacementPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: `babel-loader`,
                options: {
                    plugins: ['lodash'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
        ]
    }
};
