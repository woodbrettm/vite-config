import autoprefixer from 'autoprefixer';
import combineSelectors from 'postcss-combine-duplicated-selectors';
import combineMediaQueries from 'postcss-combine-media-query';
import compress from 'vite-plugin-compression';
import imageMin from 'vite-plugin-imagemin';

const isProd = process.env.NODE_ENV === 'production';

export default {
  css: {
    postcss: {
      plugins: [
        combineMediaQueries(),
        combineSelectors({ removeDuplicatedValues: true }),
        autoprefixer(),
      ],
    },
  },
  build: {
    minify: isProd,
  },
  plugins: [
    imageMin({
      svgo: {
        // https://github.com/svg/svgo#built-in-plugins
        plugins: [
          { name: 'RemoveTitle', active: false },
          { name: 'RemoveDescription', active: false },
          { name: 'RemoveViewBox', active: false },
          { name: 'removeDimensions', active: true },
          { name: 'removeScriptElement', active: true },
          { name: 'removeStyleElement', active: true },
        ],
      },
    }),
    compress({
      algorithm: 'brotliCompress',
    }),
  ],
};
