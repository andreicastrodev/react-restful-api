import React from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
} from '@chakra-ui/react';


import Header from './components/Header';
import Details from "./components/Details"
import Food from './components/main/Food';
import { useState } from 'react';
function App() {

  const [cartState, setCartState] = useState({
    items: [],
    totalAmount: 0
  })


  const INIT_STATE = [
    {
      title: 'Sushi',
      description: 'Japanese meal ',
      price: 22.29,
      id: "202"
    },
    {
      title: 'Sinigang na Baboy',
      description: 'Pork and veggies ',
      price: 22.29,
      id: "102"
    },
    {
      title: 'Almond tofu',
      description: 'good for getting strong',
      price: 22.29,
      id: "302"
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
