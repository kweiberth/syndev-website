// When upgrading to next@11 and react(-dom)@17, had to modify this slightly,
// which I figured out via:
// https://github.com/vercel/next.js/issues/18096#issuecomment-729868888
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin'],
};
