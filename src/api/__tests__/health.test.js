import request from 'supertest';
import app from '../../app';
import { message } from '../health';
import config from '../../config';

describe('GET /health', () => {
  it('should return a 200 status code', done => {
    request(app)
      .get('/health')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, { ...message, node_env: config.nodeEnv })
      .end(done);
  });
});
