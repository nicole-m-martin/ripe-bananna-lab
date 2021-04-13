const { Router } = require('express');
const Review = require('../models/Review');
const Film = require('../models/Film');

module.exports = Router()
  .get('/', (req, res, next) => {
    Review.findAll({attributes: ['id', 'rating', 'review'], include: { model: Film, attributes: ['id', 'title'] }} )
      .then((review) => res.send(review))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Review.create(req.body)
      .then((review) => res.send(review))
      .catch(next);
  })
  // delete has to check for all reviews by reviewer are deleted before reviewer deltion
  .delete('/:id', (req, res, next) => {
    Review.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.send({ success: '👍' }))
      .catch(next);
  });
