const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Admin = sequelize.define(
  "Admin",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: {
        allowNull: false,
        unique: true,
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestmps: true,
  }
);

module.exports = Admin;
