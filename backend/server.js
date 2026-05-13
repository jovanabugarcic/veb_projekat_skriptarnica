import dns from 'node:dns/promises';
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import productRoutes from '/routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js';


const port= process.env.PORT || 5000;

connectDB();

const app = express();



app.get('/', (req, res) => {
    res.json('Api is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
console.log(`Server is running on port ${port}`)
);