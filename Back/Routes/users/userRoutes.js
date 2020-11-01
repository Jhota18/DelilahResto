const express = require('express');

const { createUser, login } = require('../users/controller');

//USERS ROUTES
const router = express.Router();
router.post('/createU', (req, res) => {
	const reqUser = req.body;
	createUser(reqUser)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});
router.post('/login', (req, res) => {
	const { email, password } = req.body;
	login(email,password)
		.then((jwt) => {
			res.status(200).json("Ingreso exitoso, el siguiente es su token de autorizacion: "+jwt);
		})
		.catch((error) => {
			res.status(error.status).json(error.message);
		});
});

module.exports = router;