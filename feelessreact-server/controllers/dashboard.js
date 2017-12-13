const express = require('express');
const models = require('../models');

const DashboardController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);
    router.put('/:id', this.update);
    router.delete('/:id', this.delete);

    return router;
  },
  index(req, res) {
        models.Requests.findAll({
            where: {
              UserId: req.user.id,
            },
            order: [
              ['createdAt', 'DESC']
            ],
        }).then((allRequests) => {
            res.json({
              requests: allRequests,
              user: req.user
            });
        });
  },
  create(req, res) {
        models.Requests.create({
              UserId: req.user.id,
              matched_user_id: req.body.matched_user_id,
              request_date: req.body.request_date,
              transaction_amt: req.body.transaction_amt,
              status: req.body.status,
              from_country: req.body.from_country,
              to_country: req.body.to_country,
              split_money: req.body.split_money,
              minimum_amount: req.body.minimum_amount,
              exchange_in_person: req.body.exchange_in_person,
        })
        .then((request) => {
              res.sendStatus(200);
        })
        .catch(() => {
              res.sendStatus(400);
        })
  },
  update(req, res) {
        res.json({
          msg: "Successful PUT to '/dashboard' route",
          id: req.params.id
        });
  },
  delete(req, res) {
        res.json({
          msg: "Successful DELETE to '/dashboard' route",
          id: req.params.id
        });
  },
};


module.exports = DashboardController.registerRouter();
