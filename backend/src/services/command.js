import Command from '../models/commandModel.js';

export async function getCommandRecords() {
    return await Command.findAll();
}

export async function getCommandRecord(id) {
    return await Command.findByPk(id);
}

export async function createCommandRecord(commandData) {
    return Command.create(commandData);
}

export async function updateCommandRecord(command, commandData){
    return await command.update(commandData);
}

export async function deleteCommandRecord(command){
    return await command.destroy();
}

