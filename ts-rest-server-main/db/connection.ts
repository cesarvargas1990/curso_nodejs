import { Sequelize } from 'sequelize';


const db = new Sequelize('demos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
