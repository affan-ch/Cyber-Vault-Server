import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";
import User from "./User.js";

const CreditCard = sequelize.define("CreditCard", {
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

    cardHolderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cardPin: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cardExpiryMonth: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cardExpiryYear: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cardCVV: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Define the association (userId in CreditCard refers to id in User)
CreditCard.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Optional, gives a name to the association
});

// Create the table if it doesn't exist
User.sync();
CreditCard.sync();

export default CreditCard;
