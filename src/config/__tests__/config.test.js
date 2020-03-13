import { initialiseConfig, portNumber } from '../';

describe('config', () => {
  describe('NODE_ENV', () => {
    let nodeEnv;

    beforeEach(() => {
      nodeEnv = process.env.NODE_ENV;
      if (process.env.NODE_ENV) delete process.env.NODE_ENV;
    });

    afterEach(() => {
      process.env.NODE_ENV = nodeEnv;
    });

    it('should get NODE_ENV = local when environment variable not defined', () => {
      expect(initialiseConfig().nodeEnv).toEqual('local');
    });

    it('should get NODE_ENV value is environment variable is set', () => {
      process.env.NODE_ENV = 'test';
      expect(initialiseConfig().nodeEnv).toEqual('test');
    });
  });

  describe('url', () => {
    let originalServiceUrl;
    const mockServiceUrl = 'https://mockServiceUrl';

    beforeEach(() => {
      originalServiceUrl = process.env.SERVICE_URL;
    });

    afterEach(() => {
      process.env.SERVICE_URL = originalServiceUrl;
    });

    it('should return 127.0.0.1:3000 when SERVICE_URL is not set', () => {
      if (process.env.SERVICE_URL) delete process.env.SERVICE_URL;
      expect(initialiseConfig().url).toEqual(`http://127.0.0.1:${portNumber}`);
    });

    it('should return SERVICE_URL when SERVICE_URL is set', () => {
      process.env.SERVICE_URL = mockServiceUrl;
      expect(initialiseConfig().url).toEqual(mockServiceUrl);
    });
  });
});
