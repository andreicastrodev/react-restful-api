import React from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
} from '@chakra-ui/react';


import Header from './components/Header';
import Details from "./components/Details"
import Food from './components/main/Food';
function App() {

  const INIT_STATE = [
    {
      title: 'Sushi',
      description: 'bunch of fishhes',
      amount: 22.29
    },
    {
      title: 'Sinigang na Baboy',
      description: 'bunch of fishhes',
      amount: 22.29
    },
    {
      title: 'Almond tofu',
      description: 'bunch of fishhes',
      amount: 22.29
    },
  ]



  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Details />
        <Food data={INIT_STATE} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
