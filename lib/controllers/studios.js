const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
    .get('/', (req, res, next) => {
        Studio.findAll({ attributes: ['name', 'id'] })
            .then((studio) => res.send(studio))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        Studio.create(req.body)
            .then((studio) => res.send(studio))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Studio.findByPk(req.params.id)
            .then((studio) => res.send(studio))
            .catch(next);
    })