import { DataTypes } from 'sequelize'
import sequelize from "../connections/database.js";
import User from './User.js';
import Category from './Category.js';

const Product = sequelize.define(
    'Product',
    {
        // id: automatic, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: Category
            },
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User
            },
            allowNull: false
        },
        // image: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },

    },
    {
        tableName: "products",
        timestamps: true,
        underscored: true,
    }
);

// product.hasMany


export default Product