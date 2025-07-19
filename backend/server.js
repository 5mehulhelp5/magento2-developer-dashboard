import axios, { AxiosError } from "axios";
import express from "express";
import cors from "cors";
import magentoRoutes from './routes/magentoRoutes.js'
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

app.get('/api/customers', async (req, res) => {
    try {
        const response = await axios.get('http://magento2.docker/rest/V1/customers/search?searchCriteria[filter_groups][0][filters][0][field]=updated_at&searchCriteria[filter_groups][0][filters][0][value]=2022-12-25 20:21:01&searchCriteria[filter_groups][0][filters][0][condition_type]=gt', {
            headers: {
                'Authorization': `Bearer 55e6xxg0k0r6mlqfypo420e93m5nw8oz`
            }
        })
        res.json(response.data);
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.message)
            res.json({ errorMessage: error.message });
        } else {
            console.log(error)
            res.json({errorMessage: 'Unknown error fetching customers!'});
        }
    }
});

app.post('/customer/token', async (req, res) => {
    try {
        const response = await axios.post('http://magento2.docker/rest/V1/integration/customer/token', {
            username: req.body.email,
            password: req.body.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.message)
            res.json({ errorMessage: error.message });
        } else {
            console.error(error);
            res.json({errorMessage: 'Unknown error fetching customer token.'});
        }
    }
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
