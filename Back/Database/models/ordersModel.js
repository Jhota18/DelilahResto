const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const productsModel = require('./productsModel');
const requestsModel = require('./requestsModel');

const ordersModel = sequelize.define(
	'orders',
	{
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},
	{ timestamps: false },
	
);
productsModel.belongsToMany(requestsModel, { through: ordersModel });

requestsModel.belongsToMany(productsModel, { through: ordersModel });

module.exports = ordersModel;