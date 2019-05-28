let node_resolve = require('rollup-plugin-node-resolve');
let babel = require('rollup-plugin-babel');
let terser = require('rollup-plugin-terser').terser;
let license = require('rollup-plugin-node-license');
let css = require('rollup-plugin-hot-css');
let static_files = require('rollup-plugin-static-files');
let glob_import = require('rollup-plugin-glob-import');
let jsx = require('acorn-jsx');

let scss = (code, id) => {
    return require('node-sass').renderSync({
        data: code,
        compressed: true,
        includePaths: [ require('path').dirname(id) ]
    }).css.toString();
};

let config = {
    input: process.env.MAIN || './src/main.js',
    output: {
        dir: './dist',
        format: 'esm',
        assetFileNames: '[name].[hash][extname]',
        entryFileNames: '[name].[hash].js'
    },
    plugins: [
        css({
            filename: 'styles.css',
            hot: process.env.NODE_ENV !== 'production',
            transform: scss
        }),
        node_resolve(),
        babel(),
        glob_import()
    ],
    acornInjectPlugins: [
        jsx()
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        terser({
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