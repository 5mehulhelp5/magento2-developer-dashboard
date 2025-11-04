import express from 'express';
import { run } from '../controllers/runController.js';

const router = express.Router();

router.post('/', run);

export default router;