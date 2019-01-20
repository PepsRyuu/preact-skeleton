let node_resolve = require('rollup-plugin-node-resolve');
let buble = require('rollup-plugin-buble');
let uglify = require('rollup-plugin-uglify').uglify;
let license = require('rollup-plugin-node-license');
let css = require('rollup-plugin-hot-css');
let static_files = require('rollup-plugin-static-files');

let production = process.env.NODE_ENV === 'production';

let scss = (code, id) => {
    return require('node-sass').renderSync({
        data: code,
        compressed: true,
        includePaths: [ require('path').dirname(id) ]
    }).css.toString();
};

let config = {
    input: './src/main.js',
    output: {
        dir: './dist',
        format: 'esm',
        assetFileNames: '[name].[hash][extname]',
        entryFileNames: '[name].[hash].js'
    },
    plugins: [
        css({
            filename: 'styles.css',
            hot: !production,
            transform: scss
        }),
        buble({
            jsx: 'h',
            objectAssign: 'Object.assign'
        }),
        node_resolve()
    ]
};

if (production) {
    config.plugins = config.plugins.concat([
        uglify({
            compress: {
                global_defs: {
                    module: false
                }
            }
        }),
        license(),
        static_files({
            include: ['./public']
        })
    ]);
}

module.exports = config;