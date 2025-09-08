import express from 'express';
import cors from 'cors';
import magentoRoutes from '../routes/magentoRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/magento', magentoRoutes);

export default app;