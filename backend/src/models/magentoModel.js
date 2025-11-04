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
    sftp_host: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sftp_user: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sftp_password: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Magento;