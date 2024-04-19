import express from "express";
import { getSeismicData, getWeatherData , getforecastData} from "../controllers/weatherController.js";

import { validateCityName, validateSeismic } from "../middleware/validators.js";


// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getWeatherData);

router.get("/:city/forecast",validateCityName, getforecastData);


// We will export the router
export default router;

