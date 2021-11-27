import metablock from 'rollup-plugin-userscript-metablock';
import typescriptPlugin from '@rollup/plugin-typescript';
import typescript from 'typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const pkg = require('./package.json');

export default {
  input: 'src/user.ts',
  output: {
    file: 'dist/user.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    // serve("dist"),
    // livereload(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
    }),
    nodeResolve({ extensions: ['.js', '.ts', '.tsx'] }),
    typescriptPlugin({ typescript }),
    metablock({
      file: './meta.json',
      override: {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        homepage: pkg.homepage,
        author: pkg.author,
        license: pkg.license,
      },
    }),
  ],
};
