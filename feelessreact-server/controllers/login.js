const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

const LoginController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', passport.authenticate('local'), this.create);
    router.put('/:id', this.update);
    router.delete('/:id', this.delete);

    return router;
  },
  index(req, res) {
        if(req.user) {
          res.sendStatus(200);
        } else {
          res.sendStatus(400);
        }
  },
  create(req, res) {
        res.status(200).json({
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
  delete(req, res) {
        res.json({
          msg: "Successful DELETE to '/alt' route",
          id: req.params.id
        });
  },
};


module.exports = LoginController.registerRouter();
