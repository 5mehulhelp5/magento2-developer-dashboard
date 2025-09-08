import express from "express";
import cors from "cors";
import magentoRoutes from './src/routes/magentoRoutes.js'
import sequelize from "./config/database.js";

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/magento', magentoRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

const connectWithRetry = async (retries = 5, delay = 3000) => {
    for (let i = 0; i < retries; i++) {
        try {
            // authenticate() is a lightweight method to check if the connection is established
            await sequelize.authenticate();
            console.log('Database connected successfully.');

            // Sync the database
            await sequelize.sync();
            console.log('Database synced successfully.');

            return;
        } catch (error) {
            console.error(`Database connection failed. Attempt ${i + 1} of ${retries}. Retrying in ${delay} ms...`, error);

            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                throw new Error('Failed to connect to the database after multiple attempts.');
            }
        }
    }
};

// Attempt to start the server, initializing the database connection first
try {
    await connectWithRetry();

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
}
