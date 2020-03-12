import express from 'express';
import httpContext from 'express-http-context';
import { errorLogger, logger as requestLogger } from 'express-winston';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import example from './api/example';
import authenticatedExample from './api/example-authenticated';
import healthCheck from './api/health';
import { options } from './config/logging';
import { authenticateRequest } from './middleware/auth';
import swaggerDocument from './swagger.json';

const app = express();

app.use(httpContext.middleware);
app.use(requestLogger(options));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/health', healthCheck);

app.use('/example', example);
app.use('/example-authenticated', authenticateRequest, authenticatedExample);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorLogger(options));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;
