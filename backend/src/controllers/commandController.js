import {
    getCommandRecords,
    getCommandRecord,
    createCommandRecord,
    updateCommandRecord,
    deleteCommandRecord
} from '../services/command.js';

export const getCommands = async (req, res) => {
    try {
        const commands = await getCommandRecords();
        res.json(commands);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createCommand = async (req, res) => {
    try {
        const command = await createCommandRecord(req.body);
        res.status(201).json(command);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ error: err });
        } else {
            res.status(500).json({ error: err });
        }
    }
};

export const updateCommand = async (req, res) => {
    const magento = await getCommandRecord(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Command not found' });

    try {
        await updateCommandRecord(magento, req.body);
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteCommand = async (req, res) => {
    const magento = await getCommandRecord(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Command not found' });

    try {
        await deleteCommandRecord(magento);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
