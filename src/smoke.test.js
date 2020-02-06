import config from './config';
import axios from 'axios';
import { message } from './api/health';

describe('Smoke test', () => {
  it('health endpoint returns matching data', async () => {
    const healthUrl = `${config.url}/health`;
    const res = await axios.get(healthUrl);

    expect(res.data).toEqual(message);
  });
});
