const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database.js");
const User = require("./User.js");

const Account = sequelize.define("Account", {
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

    accountDomain: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    firstName: {
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
        validate: {
            customValidation() {
              if (!this.email && !this.username) {
                throw new Error('Either email or username is required.');
              }
            },
        }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    backupCodes: {
        type: DataTypes.JSON,
        allowNull: true,
    },

    backupCodesUsed: {
        type: DataTypes.JSON,
        allowNull: true,
    },

    secretKey: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    totpUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    

    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Define the association (userId in Account refers to id in User)
Account.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Optional, gives a name to the association
});

// Create the table if it doesn't exist
User.sync();
Account.sync();

module.exports = Account;
