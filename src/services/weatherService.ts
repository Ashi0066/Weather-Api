import { faker} from "@faker-js/faker";
import { SeismicData, WeatherData, forecast } from "../types/global.js";
import { storeWeatherData,storeSeismicData} from "../helpers/helpers.js";

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



export const generateSeismicDataLondon = (): SeismicData => {
  // Generate random seismic data
  const seismicData: SeismicData = {
    city:"london",
    latitude: parseFloat(faker.number.int({ min: -90, max: 90 }).toFixed(6)), // Latitude ranges from -90 to 90 degrees
    longitude: parseFloat(faker.number.int({ min: -180, max: 180 }).toFixed(6)), // Longitude ranges from -180 to 180 degrees
    depth: faker.number.int({ min: 1, max: 100 }), // Depth typically ranges from 1 to 100 kilometers
    magnitude: parseFloat(faker.number.float({ min: 2, max: 8, precision: 0.1 }).toFixed(1)), // Magnitude ranges from 2 to 8
    eventType: ['earthquake', 'explosion', 'volcanic eruption'][faker.number.int({ min: 0, max: 2 })], // Randomly select an event type
  
  };

  storeSeismicData(seismicData).catch(console.error);

  // Return seismic data
  return seismicData;
};
export const generateSeismicDataDublin = (): SeismicData => {
  // Generate random seismic data
  const seismicData: SeismicData = {
    city:"dublin",
    latitude: parseFloat(faker.number.int({ min: -90, max: 90 }).toFixed(6)), // Latitude ranges from -90 to 90 degrees
    longitude: parseFloat(faker.number.int({ min: -180, max: 180 }).toFixed(6)), // Longitude ranges from -180 to 180 degrees
    depth: faker.number.int({ min: 1, max: 100 }), // Depth typically ranges from 1 to 100 kilometers
    magnitude: parseFloat(faker.number.float({ min: 2, max: 8, precision: 0.1 }).toFixed(1)), // Magnitude ranges from 2 to 8
    eventType: ['earthquake', 'explosion', 'volcanic eruption'][faker.number.int({ min: 0, max: 2 })], // Randomly select an event type
   
  };

  storeSeismicData(seismicData).catch(console.error);

  // Return seismic data
  return seismicData;
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
