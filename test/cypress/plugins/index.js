const VARIABLES = require('../../../variables/parser')();
const RESOLUTIONS = require('../support/resolutions');

module.exports = (on, config) => {
  config.env.ENVIRONMENT = VARIABLES.ENVIRONMENT;
  config.env.RESOLUTIONS = RESOLUTIONS;

  return config;
};
