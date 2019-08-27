import express from 'express';

const router = express.Router();

router.post('/version', (req, res) => res.json({ version: '1.0' }));

export default router;
