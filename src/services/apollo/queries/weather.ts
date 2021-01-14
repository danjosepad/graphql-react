import { gql } from '@apollo/client'

export const getWeatherByName = gql`
  query{
    getCityByName(name: "Barueri", config: {
      lang: pt_br
      units: metric
    } ) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`