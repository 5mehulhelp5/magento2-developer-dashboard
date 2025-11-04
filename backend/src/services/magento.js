import Magento from '../models/magentoModel.js';

export async function getMagentoRecords() {
    return await Magento.findAll();
}

export async function getMagentoRecord(id) {
    //TODO: Add Number.isInteger check and error handling
    return await Magento.findByPk(parseInt(id));
}

export async function createMagentoRecord(magentoData) {
    return Magento.create(magentoData);
}

export async function updateMagentoRecord(magento, magentoData){
    return await magento.update(magentoData);
}

export async function deleteMagentoRecord(magento){
    return await magento.destroy();
}

