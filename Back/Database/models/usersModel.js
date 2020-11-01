const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const usersModel = sequelize.define(
	'users',
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = usersModel;