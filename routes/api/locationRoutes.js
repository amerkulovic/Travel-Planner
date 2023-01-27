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

router.get("/:id", async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveler }],
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const locationData = await Location.create({
      location_name: req.body.location_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const locationData = await Location.destroy({ where: { id: req.params.id } });

  res.status(200).json(locationData);
});

module.exports = router;
