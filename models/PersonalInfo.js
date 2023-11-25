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

    // Name Info
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

    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // Personal Info
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    dateOfBirth: {
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

    // Religion & Nationality
    religion: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    nationality: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // Education & Occupation
    education: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 

    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // Family Info
    fatherName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    fatherCnic: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    motherName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    motherCnic: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    spouseName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    spouseCnic: {
        type: DataTypes.STRING,
        allowNull: true,
    },


    // Contact Info
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // Regional Info
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

    zipCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // Record Title
    recordTitle: {
        type: DataTypes.STRING,
        allowNull: false,
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
