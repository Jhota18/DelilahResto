const authentication = require('../../middlewares/authentication');
const productsModel = require('../../Database/models/productsModel');
const authorization = require('../../middlewares/authorization');
const {createP, updateP, deleteP}= require('./productscontroller');

const express = require('express');
//PRODUCT ROUTES
const router = express.Router();
router.get('/list', authentication, (req, res) => {
	productsModel
		.findAll()
		.then((products) => {
			res.status(200).json(products);
		})
		.catch((error) => {
			res.status(500).json("Error interno, por favor intente mas tarde");
		});
});

router.post('/createP', authentication, authorization, (req, res) => {
	const data = req.body;
	createP(data)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});

router.patch('/updateP/:id', authentication, authorization, (req, res) => {
	let id = req.params.id;
	let data = req.body;
	updateP(id, data)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});

router.delete('/deleteP/:id', authentication, authorization, (req, res) => {
	let id = req.params.id;
	deleteP(id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});

module.exports = router;
