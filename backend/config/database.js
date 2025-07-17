import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'magento2-developer-dashboard',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'postgres',
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false
    }
);

export default sequelize;