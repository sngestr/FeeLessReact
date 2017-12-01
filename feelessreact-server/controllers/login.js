const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

const LoginController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', passport.authenticate('local'), this.create);
    router.put('/:id', this.update);

    return router;
  },
  index(req, res) {
    res.json({
      msg: "Successful GET to '/login' route"
    });
  },
  create(req, res) {
    console.log('IN /LOGIN CREATE')
    res.sendStatus(200);
    res.json({
      message: "YAY logged in",
      user: req.user,
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
