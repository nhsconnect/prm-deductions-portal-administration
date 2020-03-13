const portNumber = 3000;

const initialiseConfig = () => ({
  nodeEnv: process.env.NODE_ENV || 'local',
  url: process.env.SERVICE_URL || `http://127.0.0.1:${portNumber}`
});

export default initialiseConfig();

export { portNumber, initialiseConfig };
