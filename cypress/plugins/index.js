/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// cypress/plugins/index.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const injectDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  injectDevServer(on, config);

  return config;
};
