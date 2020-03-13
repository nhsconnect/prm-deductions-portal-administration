import request from 'supertest';
import app from '../../app';

jest.mock('../../middleware/auth');

describe('GET /error', () => {
  it('should return a 500 status code when we call the error endpoint', done => {
    request(app)
      .get('/error')
      .expect(500)
      .end(done);
  });

  it('should return json message when we call the error endpoint', done => {
    request(app)
      .get('/error')
      .expect(res => {
        expect(res.body).toEqual(
          expect.objectContaining({
            error: 'some-error'
          })
        );
      })
      .end(done);
  });
});
