import express from 'express';
import { errorLogger, logger as requestLogger } from 'express-winston';
import httpContext from 'express-http-context';
import example from './api/example';
import exampleAuthenticated from './api/exampleAuthenticated';
import { options } from './config/logging';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

app.use(httpContext.middleware);
app.use(requestLogger(options));

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.use('/example', example);
app.use('/exampleAuthenticated', exampleAuthenticated);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorLogger(options));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;
