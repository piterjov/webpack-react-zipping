
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = (env) => {
    return {
        entry: { },
        output: {
            filename: `[name]/[name].js?v=${Date.now()}`,
            path: path.resolve(__dirname, `zip_files/source`),
            publicPath: '/',
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {from: 'src/images/**', to: 'source/images/[name][ext]'},
                ],
            }),
            new ZipPlugin({
                path: './',
                filename: `images.zip`,
                extension: 'zip',
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        ]
    };
};
