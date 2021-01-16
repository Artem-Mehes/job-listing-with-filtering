const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = rewireAliases.aliasesOptions({
    '@assets': path.resolve(__dirname, `${paths.appSrc}/app/assets`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/app/components`),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/app/pages`),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/app/utils`),
    '@constants': path.resolve(__dirname, `${paths.appSrc}/app/constants`),
  })(config, env);
  return config;
};
