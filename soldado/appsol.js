import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';    
import { sequelize, connectDB } from './config/database.js';


const app = express();

app.use(express.json());
app.use('/api', soldadosRoutes); // http://localhost:3000/api/soldados  

const start = async () => {
    await connectDB();
    await sequelize.sync();

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
};

start();
