import request from 'supertest';
import app from './app';

jest.mock('express-winston', () => ({
  errorLogger: () => (req, res, next) => next(),
  logger: () => (req, res, next) => next()
}));

describe('app', () => {
  describe('GET /health', () => {
    it('should return a 200 status code', done => {
      request(app)
        .get('/health')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /example', () => {
    it('should return a 200 status code', done => {
      request(app)
        .get('/example')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /exampleAuthenticated', () => {
    beforeEach(() => {
      process.env.AUTHORIZATION_KEYS = 'correct-key,other-key';
    });

    it('should return a 200 status code when correctly authenticated', done => {
      request(app)
        .get('/exampleAuthenticated')
        .set('Authorization', 'correct-key')
        .expect(200)
        .end(done);
    });
    it('should return a 401 when no authorization header provided', done => {
      request(app)
        .get('/exampleAuthenticated')
        .expect(401)
        .end(done);
    });
    it('should return a 403 when authorization key is incorrect', done => {
      request(app)
        .get('/exampleAuthenticated')
        .set('Authorization', 'incorrect-key')
        .expect(403)
        .end(done);
    });
  });
})