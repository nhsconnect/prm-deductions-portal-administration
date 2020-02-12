const portNumber = 3000;

const config = {
  nodeEnv: process.env.NODE_ENV,
  url:
    process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test'
      ? `http://127.0.0.1:${portNumber}`
      : `http://${process.env.NODE_ENV}.admin.patient-deductions.nhs.uk`
};

export default config;
export { portNumber };
