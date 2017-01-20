'use strict';

const _ = require('lodash');

class GhostRouteController {

  /**
   * @class GhostRouteController
   *
   * @param {Sequelize.Model} service
   */
  constructor (service) {
    this._service = service;
  }

  /**
   * @method GhostRouteController.get
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   */
  get (req, res, next) {
    this._service.findById(req.params.id)
    .then(result => {
      if (!result) res.boom.notFound();
      else res.ok(() => res.json({ doc: result }))
    })
    .catch(err => res.boom.badImplementation(err))
  }

  /**
   * @method GhostRouteController.fetch
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   */
  fetch (req, res, next) {
    // TODO - add offset/limiting by default
    this._service.findAll()
    .then(results => res.ok(() => res.json({ docs: _.map(results, 'dataValues') })))
    .catch(err => res.boom.badImplementation(err))
  }

  /**
   * @method GhostRouteController.create
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  create (req, res, next) {
    this._service.create(req.body)
    .then(result => res.ok(() => res.json({ doc: result })))
    .catch(err => res.boom.badImplementation(err))
  }

  /**
   * @method GhostRouteController.update
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   */
  update (req, res, next) {
    this._service.findById(req.body.doc.id)
    .then(result => {
      if (!result) res.boom.notFound();
      else {
        this._service.update(req.body.doc, { where: { id: req.body.doc.id } })
        .then(result => this._service.findById(req.body.doc.id))
        .then(result => res.ok(() => res.json({ doc: result })))
      }
    })
    .catch(err => res.boom.badImplementation(err))
  }

  /**
   * @method GhostRouteController.delete
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Function} next
   */
  delete (req, res, next) {
    this._service.findById(req.params.id)
    .then(result => {
      if (!result) res.boom.notFound();
      else {
        this._service.destroy({ where: { id: req.params.id } })
        .then(result => res.ok())
        .catch(err => res.boom.badImplementation(err))
      }
    })
    .catch(err => res.boom.badImplementation(err))

  }

}

module.exports = GhostRouteController;
