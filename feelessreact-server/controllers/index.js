const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/dashboard', require('./dashboard'));


module.exports = router;
