import request from 'supertest';
import { message } from './api/health';
import app from './app';
import config from './config';

jest.mock('./config/logging');
jest.mock('express-winston', () => ({
  errorLogger: () => (req, res, next) => next(),
  logger: () => (req, res, next) => next()
}));

describe('app', () => {
  describe('GET /health', () => {
    it('should return a 200 status code', done => {
      request(app)
        .get('/health')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, { ...message, node_env: config.nodeEnv })
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

  describe('GET /', () => {
    it('should return a 200 status code', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=UTF-8')
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
});
