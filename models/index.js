const Traveler = require("./Traveler");
const Location = require("./Location");
const Trip = require("./Trip");

Traveler.belongsToMany(Location, {
  through: Trip,
});

Location.belongsToMany(Traveler, {
  through: Trip,
});

module.exports = { Traveler, Location, Trip };
