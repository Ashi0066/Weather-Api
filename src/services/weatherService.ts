import { faker} from "@faker-js/faker";
import { WeatherData, forecast } from "../types/global.js";
import { storeWeatherData } from "../helpers/helpers.js";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city:"London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
  storeWeatherData(generatedWeatherData).catch(console.error)
  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city:"Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
  storeWeatherData(generatedWeatherData).catch(console.error)
  // Return weather data
  return generatedWeatherData;
};

export const city1 = (): WeatherData =>{
  const generatedWeatherData : WeatherData =  {
    city:"London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 })
  };
  storeWeatherData(generatedWeatherData).catch(console.error)
  return generatedWeatherData;
};

export const city2 = (): WeatherData => {

  const generatedWeatherData : WeatherData ={

    city:"Dublin",
    temperature : faker.number.int({min:15,max:30}),
    humidity: faker.number.int({min:30, max:50}),
    wind: faker.number.int({min:10, max: 40 }),
    rain: faker.number.int({min:2,max:40})
  };
  storeWeatherData(generatedWeatherData).catch(console.error)
  return generatedWeatherData;



};


export const londonThreeDay = (): forecast =>{

const forecast1 ={

  dayOne : 13,
  dayTwo : 14,
  dayThree:15
};
return forecast1;
};
