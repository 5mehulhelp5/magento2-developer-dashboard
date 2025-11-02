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
    const magento = await getMagentoRecord(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Magento not found' });

    try {
        await updateMagentoRecord(magento, req.body);
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteMagento = async (req, res) => {
    const magento = await getMagentoRecord(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Magento not found' });

    try {
        await deleteMagentoRecord(magento);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }

};

