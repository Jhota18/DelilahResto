const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const productsModel = sequelize.define(
	'products',
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{ timestamps: false }
);

module.exports = productsModel;