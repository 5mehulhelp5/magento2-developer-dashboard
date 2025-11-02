import express from 'express';
import {
    createCommand,
    getCommands,
    updateCommand,
    deleteCommand
} from '../controllers/commandController.js';

const router = express.Router();

router.get('/', getCommands);
router.post('/', createCommand);
router.put('/:id', updateCommand);
router.delete('/:id', deleteCommand);

export default router;