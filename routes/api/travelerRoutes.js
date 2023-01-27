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

router.get("/:id", async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      include: [{ model: Location }],
    });

    if (!travelerData) {
      res.status(404).json({ message: "No traveler found with that id!" });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
