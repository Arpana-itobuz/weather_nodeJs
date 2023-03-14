import {
  addLocation,
  updateLocation,
  getWeatherData,
  deleteLocation,
  getAllCities,
} from "./modules/LocationOperations.mjs";

console.log(getWeatherData("kolkata"));

const loc = { country: "India", name: "Sarmera", region: "Bihar" };
const current = {
  feelslikeC: 32,
  tempC: 30,
  cloud: 100,
};

// addLocation(loc, current);
console.log(getAllCities());
