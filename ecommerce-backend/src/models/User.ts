import { DataTypes } from 'sequelize'
import sequelize from "../connections/database.js";

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {  // uploads/user-245rqwer.png
      type: DataTypes.STRING,
      allowNull: true
    },
    isSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    shippingCharge: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    tableName: "users",
    timestamps: true,
    underscored: true,
  },
);

console.log(User)
// console.log("User model created")

export default User;


