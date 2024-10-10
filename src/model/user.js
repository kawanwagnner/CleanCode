const { DatType, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define(
  "User",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestmps: true,
  }
);

module.exports = User;
