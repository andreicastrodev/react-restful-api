import { VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import AddFoodsForm from './AddFoodsForm';
const AddFoods = () => {
  return (
    <VStack>
      <Header />
      <AddFoodsForm />
    </VStack>
  );
};

export default AddFoods;
