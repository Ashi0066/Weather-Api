import express from "express";
import {  getSeismicData} from "../controllers/weatherController.js";

import { validateSeismic } from "../middleware/validators.js";


// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateSeismic, getSeismicData);
router.get("/:city/seismic",validateSeismic ,getSeismicData);




// We will export the router
export default router;
