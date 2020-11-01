const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const usersModel = require('./usersModel');

const requestsModel = sequelize.define(
	'requests',
	{
		request_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		payment_method: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

usersModel.hasMany(requestsModel);
requestsModel.belongsTo(usersModel, {});

module.exports = requestsModel;