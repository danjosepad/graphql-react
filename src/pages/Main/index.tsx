import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client'

// Project imports

import { GET_CITY_BY_NAME } from 'services/apollo/queries'
import Form from './components/Form'
import { I_WeatherData, getCityByName } from 'models'

// Styled components

import { Container, Header, MoreInfo, Wrapper, CloudsAndWeather, DataContent } from './styles'
import { H1, H2, H3, Span } from 'styles';

const App = () => {
  const [loadWeather, { loading, data, error }] = useLazyQuery<I_WeatherData>(GET_CITY_BY_NAME)
  const [city, setCity] = useState<getCityByName | null>(null)

  useEffect(() => {
    if (data) {
      setCity(data.getCityByName)
    }
  }, [data])

  // if (loading) {
  //   return <h1>Carregando...</h1>
  // }

  if (error) {
    return <h1>Erro!</h1>
  }

  const onSubmit = (values: { name: string }) => {
    loadWeather({
      variables: values
    })
  }

  return (
    <Container>
      <Header>
        <Form onSubmit={onSubmit} isLoading={loading} city={city?.name} />
      </Header>
      <Wrapper>
        {console.log('TEST', city)}
        {city && (
          <>
            <H2>{city.name}</H2>
            <H3>{city.weather.summary.description}</H3>
            <H1>{Math.round(city.weather.temperature.actual)}°</H1>
            <MoreInfo>
              <Span>Max: {Math.round(city.weather.temperature.max)}</Span>
              <Span>Min: {Math.round(city.weather.temperature.min)}</Span>
            </MoreInfo>
            <CloudsAndWeather>
              <DataContent>
                <H3>Nuvens</H3>
                <Span>Umidade: {city.weather.clouds.humidity}</Span>
                <Span>Visibilidade: {city.weather.clouds.visibility}</Span>
              </DataContent>
              <DataContent>
                <H3>Vento</H3>
                <Span>Velocidade: {city.weather.wind.speed}</Span>
              </DataContent>
            </CloudsAndWeather>
          </>
        )}
        
      </Wrapper>
    </Container>
  );
}

export default App;
