import 'dotenv/config';
import sequelize from './config/database.js';
import Magento from './models/magentoModel.js';

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');

        await sequelize.sync({alter: true});
        console.log('Database synced');
    } catch (error) {
        console.error('Error creating database or tables:', error);
    }
})();