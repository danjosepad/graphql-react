type Coordinates = {
  lat: number
  lon: number
}

type Weather = {
  clouds: {
    all: number
    humidity: number
    visibility: number
  }
  summary: {
    description: string
    icon: string
    title: string
  }
  temperature: {
    actual: number
    feelsLike: number
    max: number
    min: number
  }
  timestamp: number
  wind: {
    deg: number
    speed: number
  }
}

export type getCityByName = {
  coord: Coordinates
  country: string
  id: string
  name: string
  weather: Weather
}


export interface I_WeatherData {
  getCityByName: getCityByName
}