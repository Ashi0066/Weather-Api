import { faker} from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const city1 = (): WeatherData =>{
  const generatedWeatherData : WeatherData =  {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 })
  };
  return generatedWeatherData;
};

export const city2 = (): WeatherData => {

  const generatedWeatherData : WeatherData ={

    temperature : faker.number.int({min:15,max:30}),
    humidity: faker.number.int({min:30, max:50}),
    wind: faker.number.int({min:10, max: 40 }),
    rain: faker.number.int({min:2,max:40})
  };

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
