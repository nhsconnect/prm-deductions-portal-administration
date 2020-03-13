import express from 'express';
import httpContext from 'express-http-context';
import { errorLogger, logger as requestLogger } from 'express-winston';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import error from './api/error';
import health from './api/health';
import { options } from './config/logging';
import swaggerDocument from './swagger.json';

// Express app
const app = express();

// User defined routers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.use('/error', error);
app.use('/health', health);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Loggers and context
app.use(httpContext.middleware);
app.use(requestLogger(options));
app.use(errorLogger(options));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;
