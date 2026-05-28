import { DataTypes, DATE } from 'sequelize'
import sequelize from "../connections/database.js";
import User from './User.js';
import Order from './Order.js';

const SubOrder = sequelize.define(
    'SubOrder',
    {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Order,
                key: "id"
            }
        },
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        deliveryCharge: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        subTotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM,
            values: ["pending", 'accpet', "shipping", "partial_success", "success", "rejected"],
            defaultValue:"pending"
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }

    },
    {
        tableName: "sub_orders",
        timestamps: true,
        underscored: true,
    }
);

export default SubOrder