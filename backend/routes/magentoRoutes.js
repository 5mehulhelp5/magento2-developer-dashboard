import express from 'express';
import {
    createMagento,
    getMagentos,
    updateMagento
} from '../controllers/magentoController.js';

const router = express.Router();

router.get('/', getMagentos);
router.post('/', createMagento);
router.put('/:id', updateMagento);

export default router;