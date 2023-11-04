import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    salt:{
        type: DataTypes.JSON,
        allowNull: false,
    }
});

// Create the table if it doesn't exist
User.sync();

export default User;
