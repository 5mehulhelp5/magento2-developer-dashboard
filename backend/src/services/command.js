import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getCommandRecords() {
    return prisma.command.findMany();
}

export async function getCommandRecord(id) {
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.command.findUnique({
        where: { id: id },
    });
}

export async function createCommandRecord(commandData) {
    return prisma.command.create({
        data: commandData,
    });
}

export async function updateCommandRecord(id, commandData){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.command.update({
        where: { id: id },
        data: commandData,
    });
}

export async function deleteCommandRecord(id){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.command.delete({
        where: { id: id },
    });
}
