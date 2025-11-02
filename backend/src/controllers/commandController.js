import Command from '../models/commandModel.js';

export const getCommands = async (req, res) => {
    try {
        const commands = await Command.findAll();
        res.json(commands);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createCommand = async (req, res) => {
    try {
        const command = await Command.create(req.body);
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
    const command = await Command.findByPk(req.params.id);
    if (!command) return res.status(404).json({ error: 'Command not found' });
    await command.update(req.body);
    res.json(command);
};

export const deleteCommand = async (req, res) => {
    const command = await Command.findByPk(req.params.id);
    if (!command) return res.status(404).json({ error: 'Command not found' });
    await command.destroy();
    res.status(204).send();
};

