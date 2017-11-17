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
    Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
      res.redirect('/profile')
    );
  }).catch(() => {
    res.render('signup');
  });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/signup' route",
    });
  },
};


module.exports = SignUpController.registerRouter();
