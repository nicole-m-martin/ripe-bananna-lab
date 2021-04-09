const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');

describe('Reviewer routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
});
