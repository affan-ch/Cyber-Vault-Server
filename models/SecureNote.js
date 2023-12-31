const sequelize = require("../utils/database.js");
const User = require("./User.js");
const { DataTypes } = require("sequelize");

const SecureNote = sequelize.define("SecureNote", {
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

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    

});


// Define the association (userId in Secure Note refers to id in User)
SecureNote.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Optional, gives a name to the association
});

User.sync();
SecureNote.sync();

module.exports = SecureNote;