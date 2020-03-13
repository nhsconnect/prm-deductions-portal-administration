import axios from 'axios';
import { message } from './api/health';
import config from './config';

describe('Smoke test', () => {
  it('health endpoint returns matching data', async () => {
    const healthUrl = `${config.url}/health`;
    const res = await axios.get(healthUrl);

    expect(res.data).toEqual(expect.objectContaining(message));
  });
});
