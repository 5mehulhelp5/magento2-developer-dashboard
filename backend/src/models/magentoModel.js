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
    },
    sftp_login: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stfp_password: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Magento;