import express from 'express';
import {
    createMagento,
    getMagentos,
    updateMagento,
    deleteMagento
} from '../controllers/magentoController.js';

const router = express.Router();

router.get('/', getMagentos);
router.post('/', createMagento);
router.put('/:id', updateMagento);
router.delete('/:id', deleteMagento);

export default router;