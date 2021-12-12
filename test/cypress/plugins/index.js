const VARIABLES = require('../../../variables/parser')();

module.exports = (on, config) => {
  config.env.ENVIRONMENT = VARIABLES.ENVIRONMENT;
  return config;
};
