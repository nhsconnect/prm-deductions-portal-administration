import app from './app';
import { portNumber } from './config'
import logger from './config/logging';

app.listen(portNumber, () => logger.info(`Listening on port ${portNumber}`));

