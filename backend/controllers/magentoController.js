import Magento from '../models/magentoModel.js';

export const getMagentos = async (req, res) => {
    const magentos = await Magento.findAll();
    res.json(magentos);
};

export const createMagento = async (req, res) => {
    const magento = await Magento.create(req.body);
    res.status(201).json(magento);
};

export const updateMagento = async (req, res) => {
    const magento = await Magento.findByPk(req.params.id);
    if (!magento) return res.status(404).json({ error: 'Magento not found' });
    await magento.update(req.body);
    res.json(magento);
};

