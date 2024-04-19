import { Stream } from "stream";

interface WeatherData {
  city:String;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}
interface forecast{

  dayOne:number;
  dayTwo:number;
  dayThree:number;
}



interface SeismicData {
  city:String;
  latitude: number; // Latitude of the seismic event
  longitude: number; // Longitude of the seismic event
  depth: number; // Depth of the seismic event (in kilometers)
  magnitude: number; // Magnitude of the seismic event
  eventType: string; // Type of seismic event (e.g., earthquake, explosion)
  date: Date; // Date of the seismic event
}

