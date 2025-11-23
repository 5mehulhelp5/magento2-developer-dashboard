/**
 * @typedef { import("@prisma/client").Magento } Magento
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getMagentoRecords() {
    return prisma.magento.findMany();
}

/**
 *
 * @param {Number} id
 * @returns {Promise<Magento>}
 */
export async function getMagentoRecord(id) {
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.findUnique({
        where: { id },
    });
}

/**
 *
 * @param {Array} magentoData
 * @returns {Promise<Magento>}
 */
export async function createMagentoRecord(magentoData) {
    return prisma.magento.create({
        data: magentoData,
    });
}

/**
 *
 * @param {Number} id
 * @param {Array} magentoData
 * @returns {Promise<Magento>}
 */
export async function updateMagentoRecord(id, magentoData){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.update({
        where: { id: id },
        data: magentoData,
    });
}

export async function deleteMagentoRecord(id){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.delete({
        where: { id: id },
    });
}
