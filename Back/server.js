const express = require('express');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const sequelize = require('./Database/database');

//Express
const app = express();
app.use(helmet());
app.use(express.json());

//MODELS
const userModel = require('./Database/models/usersModel');
const productModel = require('./Database/models/productsModel');
const requestModel = require('./Database/models/requestsModel');
const orderModel = require('./Database/models/ordersModel');
userModel.sync();
requestModel.sync();
productModel.sync();
orderModel.sync();

//ROUTES REQUIRE
const userRoute= require('./Routes/users/userRoutes');
const requestsRoute= require('./Routes/requests/requestsRoute');
const productsRoute= require('./Routes/products/producstRoute');

//Routes 
app.use('/users', userRoute);
app.use('/requests', requestsRoute);
app.use('/products', productsRoute);


//SERVER PORT
app.listen(3000, () => {
	console.log('Api escuchando en http://localhost:3000');
});
