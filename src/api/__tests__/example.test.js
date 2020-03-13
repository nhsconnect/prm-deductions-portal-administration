import request from 'supertest';
import app from '../../app';

jest.mock('../../middleware/auth');

describe('GET /example', () => {
  it('should return a 200 status code', done => {
    request(app)
      .get('/example')
      .expect(200)
      .end(done);
  });

  it('should return json message when called', done => {
    request(app)
      .get('/example')
      .expect(res => {
        expect(res.body).toEqual(
          expect.objectContaining({
            data: 'not authenticated'
          })
        );
      })
      .end(done);
  });
});
