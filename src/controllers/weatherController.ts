import { Request, Response } from "express";
import {
  city1,
  city2,
  generateDublinWeatherData,
  generateLondonWeatherData,
  londonThreeDay,
} from "../services/weatherService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);

    // We will create a variable with a type of WeatherData
    let finalWeatherData: WeatherData;
    

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    }else if (city === "city1") {
      finalWeatherData = city1();
    } else if(city==="city2"){finalWeatherData =city2();
    }else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};


export const  getforecastData = async (req:Request,res:Response) =>
{
  try{
    const {city}= req.params;
    console.log(city);


    let finalforecastData : forecast;

    if(city==="london")
    {
      console.log(londonThreeDay());
      finalforecastData = londonThreeDay();

   }else{
    res.status(404).send ("city not foundd ")
   } 

   res.status(200).json(finalforecastData)
 }
 catch(error){res.status(500).send("Error in getting forecast data ")}
}
