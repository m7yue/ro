const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');

const resolveFile = filePath => path.join(__dirname, '..', filePath)

const isProductionEnv = process.env.NODE_ENV === 'production'

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
    }, 
    plugins: [
      postcss({
        extract: true,
        minimize: isProductionEnv,
      }),
      babel(babelOptions),
    ],
  },
]