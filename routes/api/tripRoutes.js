const router = require("express").Router();

const { Traveler, Location, Trip } = require("./../../models");

router.post("/", async (req, res) => {
  try {
    const tripData = await Trip.create({
      trip_budget: req.body.trip_budget,
      traveler_amount: req.body.traveler_amount,
      traveler_id: req.body.traveler_id,
      location_id: req.body.location_id,
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const tripData = await Trip.destroy({ where: { id: req.params.id } });

  res.status(200).json(tripData);
});

module.exports = router;
