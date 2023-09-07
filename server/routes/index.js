const { Router } = require('express');

const router = Router();

router.use('/users', require('./user.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;
