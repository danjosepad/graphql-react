import React from 'react';
import { useLazyQuery } from '@apollo/client'

// Project imports

import { getWeatherByName } from '../../services/apollo/queries'
import Form from './components/Form'

const App = () => {
  const [loadWeather, { loading, data, error }] = useLazyQuery(getWeatherByName)

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>Erro!</h1>
  }

  const onSubmit = (values: { name: string }) => {
    loadWeather({
      variables: values
    })
  }

  return (
    <div>
      <Form onSubmit={onSubmit} isLoading={loading} />
    </div>
  );
}

export default App;
