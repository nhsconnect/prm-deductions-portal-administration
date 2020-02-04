import express from 'express';
import logger from '../config/logging';
const router = express.Router();

router.get('/', (req, res) => {
  logger.info('example endpoint');
  res.send('hello world');
});

export default router;
