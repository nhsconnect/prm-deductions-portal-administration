import express from 'express';
const router = express.Router();

router.get('/', () => {
  throw new Error('some-error');
});

export default router;
