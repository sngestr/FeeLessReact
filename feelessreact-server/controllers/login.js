const express = require('express');
const models = require('../models');

const LoginController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);
    router.put('/:id', this.update);

    return router;
  },
  index(req, res) {
    res.json({
      msg: "Successful GET to '/login' route"
    });
  },
  create(req, res) {
    res.json({
      msg: "Successful POST to '/login' route"
    });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/login' route",
      id: req.params.id
    });
  },
};


module.exports = LoginController.registerRouter();
