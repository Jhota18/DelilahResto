const authorization = (req, res, next) => {
	const { admin } = req.usuario;
	if (admin !== 1) {
		res.status(401).json('No tienes suficientes permisos para acceder');
	} else {
		next();
	}
};
module.exports = authorization;
