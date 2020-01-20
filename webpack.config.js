const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const rootPath = path.resolve(__dirname);

module.exports = {
    mode: 'none', // "production" | "development" | "none"
    entry: './utm.js',
    output: {
        filename: 'utm.js',
        path: path.join(rootPath, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin(
            [{ from: path.join(rootPath, '*.png'), to: path.join(rootPath, 'dist') },
            { from: 'manifest.json', to: path.join(__dirname, 'dist') },
            { from: path.join(rootPath, '_locales'), to: path.join(rootPath, 'dist/_locales') }]
        ),
        new ZipPlugin({
            path: path.join(rootPath, 'dist'),
            filename: 'remove-utm.zip'
        })
    ]
};