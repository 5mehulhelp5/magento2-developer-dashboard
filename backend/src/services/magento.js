import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getMagentoRecords() {
    return prisma.magento.findMany();
}

export async function getMagentoRecord(id) {
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.findUnique({
        where: { id },
    });
}

export async function createMagentoRecord(magentoData) {
    return prisma.magento.create({
        data: magentoData,
    });
}

export async function updateMagentoRecord(id, magentoData){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.update({
        where: { id },
        data: magentoData,
    });
}

export async function deleteMagentoRecord(id){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.magento.delete({
        where: { id },
    });
}

