const requestsModel = require('../../Database/models/requestsModel');
const productsModel = require('../../Database/models/productsModel');
const usersModel = require('../../Database/models/usersModel');


const createRequest = (requestData) => {
    return new Promise((res, rejc) => {
		if (requestData.products && Array.isArray(requestData.products)) {
			const { products, ...request } = requestData;
			console.log(request);
			requestsModel
				.create(request)
				.then((request) => {
					Promise.all(
						products.map((product) => {
							return request.addProducts(product.id, { through: { quantity: product.quantity } });
					   })
					).then((response) =>{
						res(response);
					})
					.catch( (error) => {
						console.log(request.id);
						requestsModel.destroy({ where: { id: request.id } });
						if(error.name === "SequelizeForeignKeyConstraintError") {
							rejc({ status: 404, message: 'No se encontró el ID de producto, por favor verifique' });
						} else{
							rejc({ status: 500, message: 'Error interno, no se pudo crear la orden' });
						}
					})
				})
				.catch((error) => {
					console.log(error);
					if(error.name === "SequelizeForeignKeyConstraintError") {
						rejc({ status: 404, message: 'No se encontró el ID de usuario, por favor verifique' });
					}
				});
		} else {
			rejc({ status: 406, message: 'Campos enviados no validos' });
		}
	});
};


const updateById = (id, data) => {
	return new Promise((res, rejc) => {
		if (data.hasOwnProperty('status') && id) {
			requestsModel
				.update({ status: data.status }, { where: { id: id } })
				.then((response) => {
					console.log(response);
					if (response[0] === 1) {
						res('Estado de el pedido actualizado exitosamente');
					} else {
						rejc({ status: 404, message: 'Datos no encontrados, no se pudo actualizar tu pedido.' });
					}
				})
				.catch((error) => {
					rejc({ status: 500, message: 'Por favor intente mas tarde' });
				});
		} else {
			rejc({ status: 406, message: 'Campos no validos' });
		}
	});
};



module.exports = {createRequest, updateById}