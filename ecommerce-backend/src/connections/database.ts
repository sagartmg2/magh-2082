// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize"

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5439/postgres', {
    logging: false
})

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


