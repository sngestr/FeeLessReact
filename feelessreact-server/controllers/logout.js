const express = require('express');
const models = require('../models');

const Users = models.Users;

const LogoutController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);
    router.put('/:id', this.update);
    router.delete('/:id', this.delete);

    return router;
  },
  index(req, res) {
        res.json({
          msg: "Successful GET to '/logout' route"
        });
  },
  create(req, res) {
      	req.logout();
        console.log("yay logout!");
        res.sendStatus(200);
  },
  update(req, res) {
        res.json({
          msg: "Successful PUT to '/logout' route",
          id: req.params.id
        });
  },
  delete(req, res) {
        res.json({
          msg: "Successful DELETE to '/logout' route",
          id: req.params.id
        });
  },
};


module.exports = LogoutController.registerRouter();
