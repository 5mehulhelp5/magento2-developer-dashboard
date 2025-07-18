import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Magento = sequelize.define('Magento', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Magento;