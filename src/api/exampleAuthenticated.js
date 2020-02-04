import express from 'express';
import { checkIsAuthenticated } from '../middleware/auth';
import logger from '../config/logging';
const router = express.Router();

router.get('/', checkIsAuthenticated, (req, res) => {
  logger.info('authenticated successfully');
  res.sendStatus(200).send('hello world authenticated');
});

export default router;
