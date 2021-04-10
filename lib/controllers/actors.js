const { Router } = require('express');
const Actor = require('../models/Actor');

module.exports = Router()
  .get('/', (req, res, next) => {
    Actor.findAll()
    .then((actor) => res.send(actor))
    .catch(next);
  })
  .post('/', (req, res, next) => {
    Actor.create(req.body)
    .then((actor) => res.send(actor))
    .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Actor.findByPk(req.params.id)
    .then((actor) => res.send(actor))
    .catch(next);
  })