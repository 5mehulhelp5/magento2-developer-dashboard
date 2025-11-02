import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Command = sequelize.define('Command', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Command;