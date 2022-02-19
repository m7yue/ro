const path = require('path');
const buble = require('@rollup/plugin-buble');
const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const vue = require('rollup-plugin-vue');
const css = require('rollup-plugin-css-only');
const replace = require('@rollup/plugin-replace');
const { writeFileSync } = require('fs');

const resolveFile = filePath => path.join(__dirname, '..', filePath)

const babelOptions = {
  "presets": ['@babel/preset-env']
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      name: 'App'
    }, 
    plugins: [
      vue({css: false}),
      css({
        output: 'index.css'
      }),
      nodeResolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      babel(babelOptions),
      buble()
    ],
  },
]