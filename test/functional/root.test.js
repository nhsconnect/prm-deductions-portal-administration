import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import config from '../../src/config';

describe('GET /', () => {
  it('returns 200 and html', async () => {
    const res = await axios.get(`${config.url}/`, {
      adapter
    });

    expect(res.data).toContain('<h1>Administration Portal</h1>');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('text/html; charset=UTF-8');
  });
});
