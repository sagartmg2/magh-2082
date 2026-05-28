import { DataTypes, DATE } from 'sequelize'
import sequelize from "../connections/database.js";
import SubOrder from './SubOrder.js';
import Product from './Product.js';

const OrderItem = sequelize.define(
    'OrderItem',
    {
        subOrderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: SubOrder,
                key: "id"
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: "id"
            }
        },
        productTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
    },
    {
        tableName: "order_items",
        timestamps: true,
        underscored: true,
    }
);

export default OrderItem