const router = require("express").Router();
const travelerRoutes = require("./travelerRoutes");
const locationRoutes = require("./locationRoutes");

router.use("/travelers", travelerRoutes);
router.use("/locations", locationRoutes);

module.exports = router;
