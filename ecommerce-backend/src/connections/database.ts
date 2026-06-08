// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize"


console.log(process.env.DB_USERNAME);


// const sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5439/postgres`, {

const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=${process.env.DB_SSL}`, {
    logging: true
})

// const sequelize = new Sequelize(
//     process.env.DB_NAME as string,
//     process.env.DB_USERNAME as string,
//     process.env.DB_PASSWORD as string,
//     {
//         host: process.env.DB_HOST,
//         port:5439,
//         dialect: 'postgres',
//         logging: false
//     }
// );

// try {
//     await sequelize.authenticate();
//     // await sequelize.sync({ alter: true });
//     await sequelize.sync({ alter: true, force: true });
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

const checkDbConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        // await sequelize.sync({ alter: true, 
        // force: true });
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

checkDbConnection();

export default sequelize


