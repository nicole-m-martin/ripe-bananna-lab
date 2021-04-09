const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');

describe('Film routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
});
