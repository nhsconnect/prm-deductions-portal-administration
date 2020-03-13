import request from 'supertest';
import app from '../app';

describe('app', () => {
  describe('GET /', () => {
    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /health', () => {
    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/health')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(done);
    });
  });
});
