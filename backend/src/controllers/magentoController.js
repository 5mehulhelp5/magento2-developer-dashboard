import {
    getMagentoRecords,
    getMagentoRecord,
    createMagentoRecord,
    updateMagentoRecord,
    deleteMagentoRecord
} from '../services/magento.js';

export const getMagentos = async (req, res) => {
    try {
        const magentos = await getMagentoRecords()
        res.json(magentos);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getMagento = async (req, res) => {
    const id = req.params.id;
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    try {
        const magento = await getMagentoRecord(id)
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

export const createMagento = async (req, res) => {
    try {
        const magento = await createMagentoRecord(req.body);
        res.status(201).json(magento);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ error: err });
        } else {
            res.status(500).json({ error: err });
        }
    }
};

export const updateMagento = async (req, res) => {
    const id = req.params.id;
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    try {
        await updateMagentoRecord(id, req.body);
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteMagento = async (req, res) => {
    const id = req.params.id;
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    try {
        await deleteMagentoRecord(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
