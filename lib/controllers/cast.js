const { Router } = require('express');
const Cast = require('../models/Cast');


module.exports = Router()
  .post('/', (req, res, next) => {
    Cast.create(req.body)
      .then((cast) => res.send(cast))
      .catch(next);
  });