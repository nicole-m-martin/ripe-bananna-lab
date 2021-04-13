const { Router } = require('express');
const Actor = require('../models/Actor');
const Cast = require('../models/Cast');
const Film = require('../models/Film');

module.exports = Router()
  .get('/', (req, res, next) => {
    Actor.findAll({ attributes: ['id', 'name'], })
      .then((actor) => res.send(actor))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Actor.create(req.body)
      .then((actor) => res.send(actor))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Actor.findByPk(req.params.id, { include: { model: Film, attributes: ['id', 'title', 'released'] }} )
      .then((actor) => res.send(actor))
      .catch(next);
  })