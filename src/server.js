import express from 'express';
import User from './models/User.js';
import Sequelize from 'sequelize';
import config from './config/database.js';
import userRoutes from './routes.js';

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);
User.init(sequelize);

app.use('/usuario', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados");
        app.listen(3000, () => {
            console.log("Servidor ligado")
        });
    })
    .catch((err) => {
        console.error("Erro ao conectar: " + err)
    })
