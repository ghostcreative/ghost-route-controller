'use strict';

const GhostRouteController = require('./GhostRouteController');

/**
 * @name GhostRouteControllerConfig
 * @type {Object}
 * @property {String} modelName
 * @property {String} modelScope
 */

class GhostRouteControllerFactory {

  /**
   * @class GhostRouteControllerFactory
   *
   * @param {GhostRouteControllerConfig} config
   * @param {Sequelize} db
   * @returns {GhostRouteController}
   */
  constructor (config, db) {
    const service = db[config.modelName].scope(config.modelScope);
    return new GhostRouteController(service);
  }

}

module.exports = GhostRouteControllerFactory;