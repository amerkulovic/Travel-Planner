const router = require("express").Router();

const { Traveler, Location, Trip } = require("./../../models");

router.get("/", async (req, res) => {
  try {
    const travelerData = await Traveler.findAll({
      include: [Location],
      through: [Trip],
    });
    res.status(200).json(travelerData);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
