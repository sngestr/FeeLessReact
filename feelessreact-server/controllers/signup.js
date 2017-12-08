const express = require('express');
const models = require('../models');

const Users = models.Users;

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
    Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password_hash: req.body.password_hash,
    }).then((user) => {
      req.login(user, () =>
        res.status(200).json({
          user,
          message: "New user created and logged in",
        })
      );
  }).catch(() => {
    res.status(400).json({
      message: "error creating user",
    });
  });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/signup' route",
    });
  },
};


module.exports = SignUpController.registerRouter();
