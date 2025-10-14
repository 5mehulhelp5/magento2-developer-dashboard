import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Magento = sequelize.define('Magento', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Magento;