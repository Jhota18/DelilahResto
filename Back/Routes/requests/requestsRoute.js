const express = require('express');
//CONTROLLERS
const { createRequest, findById, updateById} = require('./requestsController');

//MIDDLEWARES
const authentication = require('../../middlewares/authentication');
const authorization = require('../../middlewares/authorization');

// ORDER ROUTES
const router = express.Router();
//CREATE ORDER
router.post('/createR', authentication, (req, res) => {
	let data = req.body;
	data.request_date = new Date();
	data.status = 'nuevo';
	createRequest(data).then((request)=>{
		res.status(200).json(request);
	}).catch((error) => {
		res.status(error.status).json(error.message);
	})
});


router.patch('/updateR/:id', authentication, authorization, (req, res) => {
	let id = req.params.id;
	let data = req.body;
	updateById(id, data)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});

module.exports = router;