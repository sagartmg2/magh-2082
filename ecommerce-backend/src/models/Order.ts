import { DataTypes, DATE } from 'sequelize'
import sequelize from "../connections/database.js";
import User from './User.js';

const Order = sequelize.define(
    'Order',
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondaryAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ["pending", "partial_success", "success", "rejected"],
            defaultValue: "pending"
        },
        paymentMode: {
            type: DataTypes.ENUM,
            values: ["cash", "esewa"],
            defaultValue: "cash"
        },
        paymentStatus: {
            type: DataTypes.ENUM,
            values: ["unpaid", "paid", "confit", "refund"],
            defaultValue: "unpaid"
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: "orders",
        timestamps: true,
        underscored: true,
    }
);

export default Order