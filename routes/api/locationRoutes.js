const router = require("express").Router();

const { Traveler, Location, Trip } = require("./../../models");

router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [Traveler],
      through: [Trip],
    });
    res.status(200).json(locationData);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
