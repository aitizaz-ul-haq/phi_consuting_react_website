import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      safelist: ['some-class-you-want-to-keep'],
      // Specify other PurgeCSS options here.
    }),
  ],
};
