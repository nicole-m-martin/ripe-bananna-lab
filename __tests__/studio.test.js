const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');

describe('Studio routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
});
