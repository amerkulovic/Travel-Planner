const Traveler = require("./Traveler");
const Location = require("./Location");
const Trip = require("./Trip");

Traveler.belongsToMany(Location, {
  through: Trip,
  foreignKey: "traveler_id",
});

Location.belongsToMany(Traveler, {
  through: Trip,
  foreignKey:"location_id"
});

module.exports = { Traveler, Location, Trip };
