const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Actor = require('../lib/models/Actor');
const Film = require('../lib/models/Film');
const Cast = require('../lib/models/Cast');

describe('Actor routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('get all actors', async () => {
    const actor = await Actor.create({
      name: 'John Doe',
      dob: '1980-06-17',
      pob: 'place of birth'
    });

    return request(app)
      .get('/api/v1/actors')
      .then((res) => {
        expect(res.body).toEqual([{
          id: 1,
          name: 'John Doe',
        }]);
      })
  })

  it('post a new actor', async () => {
    return request(app)
      .post(`/api/v1/actors`)
      .send({
        name: 'Jane Doe',
        dob: '1980-06-17',
        pob: 'place of birth'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Jane Doe',
          dob: '1980-06-17',
          pob: 'place of birth'
        });
      })
  })


  //ADD A FILM 
  it('get an actor by id', async () => {
    const film = await Film.create({
      title: 'RIP Bananna',
      released: 1984
    });

    const actor = await Actor.create({
      name: 'John Doe',
      dob: '1980-06-17',
      pob: 'place of birth',
    });

    const cast = await Cast.create({
      role: 'main',
      FilmId: film.id,
      ActorId: actor.id
    });
    console.log(cast, 'HLELOO WORLD')
    return request(app)
      .get(`/api/v1/actors/${actor.id}`)
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'John Doe',
          dob: '1980-06-17',
          pob: 'place of birth',
        });
      })
  })

});
