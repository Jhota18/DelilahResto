const express = require("express");
//CONTROLLERS
const {
  createRequest,
  updateById,
  deleteById,
} = require("./requestsController");

const requestsModel = require("../../Database/models/requestsModel");
const ordersModel = require("../../Database/models/ordersModel");
const productsModel = require("../../Database/models/productsModel");
const usersModel = require("../../Database/models/usersModel");

//MIDDLEWARES
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const { route } = require("../users/userRoutes");

// ORDER ROUTES
const router = express.Router();
//CREATE ORDER
router.post("/createR", authentication, (req, res) => {
  let data = req.body;
  data.request_date = new Date();
  data.status = "nuevo";
  createRequest(data)
    .then((request) => {
      res.status(200).json(request);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

router.patch("/updateR/:id", authentication, authorization, (req, res) => {
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

router.delete("/delete/:id", authentication, authorization, (req, res) => {
  let id = req.params.id;
  deleteById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

router.get("/list", authentication, (req, res) => {
  requestsModel
    .findAll()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((error) => {
      req.status(500);
    });
});

router.get("/orderList", authentication, (req, res) => {
  ordersModel
    .findAll()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((error) => {
      res.status(500);
    });
});

module.exports = router;
