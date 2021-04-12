const { Router } = require('express');
const Film = require('../models/Film');
const Studio = require('../models/Studio');

module.exports = Router()
    .get('/', (req, res, next) => {
        Film.findAll({ include: { model: Studio, attributes: ['name', 'id'] } })
            .then((film) => res.send(film))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        Film.create(req.body)
            .then((film) => res.send(film))
            .catch(next);
    })
    // add reviews to return
    .get('/:id', (req, res, next) => {
        Film.findByPk(req.params.id, { include: { model: Studio, attributes: ['name', 'id'] } })
            .then((film) => res.send(film))
            .catch(next);
    })