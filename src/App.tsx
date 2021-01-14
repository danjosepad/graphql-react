import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from './services/api'
import MainPage from './pages/Main'

function App() {
  return (
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );
}

export default App;
