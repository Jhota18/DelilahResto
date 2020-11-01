const productsModel = require('../../Database/models/productsModel');


const createP = (data) => {
	return new Promise((res, rejc) => {
		productsModel
			.create(data)
			.then((product) => {
				res(product);
			})
			.catch((error) => {
				if ((error.name = 'SequelizeValidationError')) {
					rejc({ status: 406, message: `el campo ${error.errors[0].path} no fue enviado` });
				} else {
					rejc({ status: 500, message: 'Poseemos problemas, por favor intenta mas tarde' });
				}
			});
	});
};

const updateP = (id, data) => {
	return new Promise((res, rejc) => {
		productsModel
			.update(data, { where: { id: id } })
			.then((response) => {
				if (response[0] === 1) {
					res('Producto actualizado con exito');
				} else {
					rejc({ status: 404, message: 'Datos no encontrados, no se pudo actualizar el producto.' });
				}
			})
			.catch((error) => {
				rejc({ status: 500, message: 'Error interno, por favor intente  mas tarde.' });
			});
	});
};

const deleteP = (id) => {
	return new Promise((res, rejc) => {
		productsModel
			.destroy({ where: { id: id } })
			.then((response) => {
				if (response === 1) {
					res('producto eliminado');
				} else {
					rejc({ status: 404, message: 'Producto no encontrado, por favor verifique' });
				}
			})
			.then((error) => {
				rejc({ status: 500, message: 'Poseemos problemas, por favor intenta mas tarde' });
			});
	});
};
module.exports = {
	createP,
	updateP,
	deleteP,
};