const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');

describe('Reviewer routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('get all reviewers', async () => {
    const reviewer = await Reviewer.create({
      name: 'John Doe',
      company: 'Ripe Bananna'

    });

    return request(app)
      .get('/api/v1/reviewers')
      .then((res) => {
        expect(res.body).toEqual([{
          id: 1,
          name: 'John Doe',
          company: 'Ripe Bananna'
        }]);
      })
  })

  it('post a new reviewer', async () => {
    return request(app)
      .post(`/api/v1/reviewers`)
      .send({
        name: 'John Doe',
        company: 'Ripe Bananna'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'John Doe',
          company: 'Ripe Bananna'
        });
      })
  })

  it('get an reviewer by id', async () => {
    const reviewer = await Reviewer.create({
      name: 'John Doe',
      company: 'Ripe Bananna'
    })
    return request(app)
      .get(`/api/v1/reviewers/${reviewer.id}`)
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'John Doe',
          company: 'Ripe Bananna'
        });
      })
  })

  it('update a reviewer by id', async () => {
    const reviewer = await Reviewer.create({
      name: 'John Doe',
      company: 'Ripe Bananna'
    })
    return request(app)
      .patch(`/api/v1/reviewers/${reviewer.id}`)
      .send({ name: 'Jane Doe' })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Jane Doe',
          company: 'Ripe Bananna'
        });
      })
  })


  //add the reviews they made
  //CANNOT DELETE IF THEY HAVE REVIEWS
  it('get an reviewer by id', async () => {
    const reviewer = await Reviewer.create({
      name: 'John Doe',
      company: 'Ripe Bananna'
    })
    return request(app)
      .delete(`/api/v1/reviewers/${reviewer.id}`)
      .then((res) => {
        expect(res.body).toEqual({ success: '👍' });
      })
  })
});
