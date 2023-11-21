import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";
import User from "./User.js";

const PersonalInfo = sequelize.define("PersonalInfo", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    middleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    zip: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    dob: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    cnic: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    education: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});


// Define the association (userId in PersonalInfo refers to id in User)
PersonalInfo.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Optional, gives a name to the association
});

// Create the table if it doesn't exist
User.sync();
PersonalInfo.sync();

export default PersonalInfo;
