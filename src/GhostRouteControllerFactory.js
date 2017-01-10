'use strict';

const GhostRouteController = require('./GhostRouteController');

/**
 * @class GhostRouteControllerFactory
 */
class GhostRouteControllerFactory {

  /**
   * @method GhostRouteControllerFactory.get
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   * @returns {GhostRouteController.get}
   */
  static get (req, res, next) {
    if (!this.service) throw new Error('GhostRouteControllerFactory.get failed - no service set.');
    else return new GhostRouteController(this.service).get(req, res, next);
  }

  /**
   * @method GhostRouteControllerFactory.fetch
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   * @returns {GhostRouteController.fetch}
   */
  static fetch (req, res, next) {
    if (!this.service) throw new Error('GhostRouteControllerFactory.fetch failed - no service set.');
    else return new GhostRouteController(this.service).fetch(req, res, next);
  }

  /**
   * @method GhostRouteControllerFactory.create
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   * @returns {GhostRouteController.create}
   */
  static create (req, res, next) {
    if (!this.service) throw new Error('GhostRouteControllerFactory.create failed - no service set.');
    else return new GhostRouteController(this.service).create(req, res, next);
  }

  /**
   * @method GhostRouteControllerFactory.update
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   * @returns {GhostRouteController.update}
   */
  static update (req, res, next) {
    if (!this.service) throw new Error('GhostRouteControllerFactory.update failed - no service set.');
    else return new GhostRouteController(this.service).update(req, res, next);
  }

  /**
   * @method GhostRouteControllerFactory.delete
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   * @returns {GhostRouteController.delete}
   */
  static delete (req, res, next) {
    if (!this.service) throw new Error('GhostRouteControllerFactory.delete failed - no service set.');
    else return new GhostRouteController(this.service).delete(req, res, next);
  }

}

module.exports = GhostRouteControllerFactory;