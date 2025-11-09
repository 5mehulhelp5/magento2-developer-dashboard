import express from 'express';
import {
    createMagento,
    getMagentos,
    getMagento,
    updateMagento,
    deleteMagento
} from '../controllers/magentoController.js';

const router = express.Router();

router.get('/', getMagentos);
router.post('/', createMagento);
router.get('/:id', getMagento);
router.put('/:id', updateMagento);
router.delete('/:id', deleteMagento);

export default router;