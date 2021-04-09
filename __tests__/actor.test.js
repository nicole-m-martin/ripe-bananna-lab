const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Actor = require('../lib/models/Actor');

describe('Actor routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
});
