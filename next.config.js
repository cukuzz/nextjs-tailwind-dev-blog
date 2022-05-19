const debug = process.env.NODE_ENV !== 'production';
const name = 'nextjs-tailwind-dev-blog';

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
};
