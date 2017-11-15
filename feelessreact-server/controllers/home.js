// const express = require('express');
// const models = require('../models');
//
// const router = express.Router();
//
//
// router.get('/', (req, res) => {
//   res.json({
//     msg: "Successful GET to '/' route"
//   });
// });
//
// router.post('/', (req, res) => {
//   res.json({
//     msg: "Successful POST to '/' route"
//   });
// });
//
// router.put('/:id', (req, res) => {
//   res.json({
//     msg: "Successful PUT to '/' route",
//     id: req.params.id
//   });
// });
//
// router.delete('/:id', (req, res) => {
//   res.json({
//     msg: "Successful DELETE to '/' route",
//     id: req.params.id
//   });
// });
//
//
// module.exports = router;


const express = require('express');
const models = require('../models');

const HomeController = {
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
      msg: "Successful GET to '/alt' route"
    });
  },
  create(req, res) {
    res.json({
      msg: "Successful POST to '/alt' route"
    });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/alt' route",
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


module.exports = HomeController.registerRouter();
