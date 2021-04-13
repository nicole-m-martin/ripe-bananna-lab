require('../lib/models/association');
const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Review = require('../lib/models/Review');
const Film = require('../lib/models/Film');
const Reviewer = require('../lib/models/Reviewer');
// const Studio = require('../lib/models/Studio');

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('get all Review', async () => {
    const film = await Film.create({
      title: 'RIP Bananna',
      released: 1984
    });

    const review = await Review.create({
      rating: 5,
      review: 'This movie is awesome!',
      FilmId: film.id
    });

    return request(app)
      .get('/api/v1/reviews')
      .then((res) => {
        expect(res.body).toEqual([{
            id: 1,
            rating: 5,
            review: 'This movie is awesome!',
            Film: {
              title: 'RIP Bananna',
              id: 1
            }
        }]);
      });
  });

  it('post a new review', async () => {
    const film = await Film.create({
      title: 'RIP Bananna',
      released: 1984
    });

    const reviewer = await Reviewer.create({
      name: 'John Doe',
      company: 'Ripe Bananna'

    });

    return request(app)
      .post(`/api/v1/reviews`)
      .send({
        rating: 5,
        review: 'This movie is awesome!',
        FilmId: film.id,
        ReviewerId: reviewer.id
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          rating: 5,
          review: 'This movie is awesome!',
          FilmId: 1,
          ReviewerId: 1,
        });
      });
  });

  it('deletes a review by id', async () => {
    const review = await Review.create({
        rating: 5,
        review: 'This movie is awesome!',
    });
    return request(app)
      .delete(`/api/v1/reviews/${review.id}`)
      .then((res) => {
        expect(res.body).toEqual({ success: '👍' });
      });
  });
});
