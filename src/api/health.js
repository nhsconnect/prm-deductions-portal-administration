import express from 'express';
const router = express.Router();

export const message = {
  version: '1',
  description: 'Health of Deduction PRM Component Template',
  node_env: process.env.NODE_ENV,
  status: 'running'
};

router.get('/', (req, res) => {
  res.json(message);
});

export default router;
