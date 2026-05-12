import { DataTypes } from 'sequelize'
import sequelize from "../connections/database.js";
import User from './User.js';

const Category = sequelize.define(
    'Category',
    {
        // id: automatic, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "categories",
        timestamps: true,
        underscored: true,
    }
);


Category.hasMany(Category, {
    foreignKey: "parent_id",
    // foreignKey: "parentId",
    as: "subCategories"
})





export default Category