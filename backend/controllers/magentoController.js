import Magento from '../models/magentoModel.js';

export const getMagentos = async (req, res) => {
    try {
        const magentos = await Magento.findAll();
        res.json(magentos);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createMagento = async (req, res) => {
    try {
        const magento = await Magento.create(req.body);
        res.status(201).json(magento);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateMagento = async (req, res) => {
    const magento = await Magento.findByPk(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Magento not found' });
    await magento.update(req.body);
    res.json(magento);
};

