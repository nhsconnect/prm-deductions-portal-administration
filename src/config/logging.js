import { createLogger, format, transports } from 'winston';
import traverse from 'traverse';
import cloneDeep from 'lodash.clonedeep';

const OBFUSCATED_VALUE = '********';
const SECRET_KEYS = ['passcode', 'data'];

export const obfuscateSecrets = format(info => {
  const updated = cloneDeep(info);
  traverse(updated).forEach(function() {
    if (SECRET_KEYS.includes(this.key)) this.update(OBFUSCATED_VALUE);
  });
  return updated;
});

export const options = {
  level: 'debug',
  format: format.combine(format.timestamp(), format.json(), obfuscateSecrets()),
  transports: [new transports.Console({ handleExceptions: true })]
};

const logger = createLogger(options);

logger.error = (message, error) => {
  logger.log('error', `${message}: ${error.message}`, { error, stack: error.stack });
};

export default logger;
