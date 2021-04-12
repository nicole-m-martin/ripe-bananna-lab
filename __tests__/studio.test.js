const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');

describe('Studio routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('get all studios', async () => {
    const studio = await Studio.create({
      name: 'John Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    });

    const studio1 = await Studio.create({
      name: 'Jane Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    });

    console.log('RIGHT HERE', studio);
    return request(app)
      .get('/api/v1/studios')
      .then((res) => {
        expect(res.body).toEqual([{
          id: 1,
          name: 'John Doe',
        },
        {
          name: 'Jane Doe',
          id: 2
        }]);
      })
  })

  it('post a new studio', async () => {
    return request(app)
      .post(`/api/v1/studios`)
      .send({
        name: 'Jane Doe',
        city: 'Death Valley',
        state: 'CA',
        country: 'USA'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Jane Doe',
          city: 'Death Valley',
          state: 'CA',
          country: 'USA'
        });
      })
  })

  it('get an studio by id', async () => {
    const studio = await Studio.create({
      name: 'Jane Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    })
    return request(app)
      .get(`/api/v1/studios/${studio.id}`)
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Jane Doe',
          city: 'Death Valley',
          state: 'CA',
          country: 'USA'
        });
      })
  })
});
