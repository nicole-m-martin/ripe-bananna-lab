require('../lib/models/association');
const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');


describe('Film routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('get all film', async () => {

    const studio = await Studio.create({
      name: 'Jane Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    });

    const film = await Film.create({
      title: 'RIP Bananna',
      released: 1984,
      StudioId: studio.id
    });

    return request(app)
      .get('/api/v1/films')
      .then((res) => {
        expect(res.body).toEqual([{
          id: 1,
          title: 'RIP Bananna',
          released: 1984,
          StudioId: 1,
          Studio: {
            name: 'Jane Doe',
            id: 1
          }
        }]);
      })
  })

  it('post a new film', async () => {
    const studio = await Studio.create({
      name: 'Jane Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    });

    return request(app)
      .post(`/api/v1/films`)
      .send({
        title: 'RIP Bananna',
        released: 1984,
        StudioId: studio.id
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          title: 'RIP Bananna',
          released: 1984,
          StudioId: 1
        });
      })
  })

  // need to add cast and reviews
  it('get an film by id', async () => {
    const studio = await Studio.create({
      name: 'Jane Doe',
      city: 'Death Valley',
      state: 'CA',
      country: 'USA'
    });

    const film = await Film.create({
      title: 'RIP Bananna',
      released: 1984,
      StudioId: studio.id
    })
    return request(app)
      .get(`/api/v1/films/${film.id}`)
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          title: 'RIP Bananna',
          released: 1984,
          StudioId: 1,
          Studio: {
            name: 'Jane Doe',
            id: 1
          }
        });
      })
  })
});
