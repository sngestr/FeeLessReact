const express = require('express');
const models = require('../models');

const SignUpController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);
    router.put('/', this.update);

    return router;
  },
  index(req, res) {
    res.json({
      msg: "Successful GET to '/signup' route"
    });
  },
  create(req, res) {
    res.json({
      msg: "Successful POST to '/signup' route"
    });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/signup' route",
    });
  },
};


module.exports = SignUpController.registerRouter();
