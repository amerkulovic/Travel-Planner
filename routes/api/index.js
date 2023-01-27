const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');

router.use('/travelers', travelerRoutes);

module.exports = router;