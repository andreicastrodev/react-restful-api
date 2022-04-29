import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

const AddFoodsForm = () => {
  const priceRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = async e => {
    e.preventDefault();
    const priceRefValue = priceRef.current.value;
    const descriptionRefValue = descriptionRef.current.value;
    const titleRefValue = titleRef.current.value;

    const data = {
      priceRefValue,
      descriptionRefValue,
      titleRefValue,
    };

    const graphqlQuery = {
      query: `
      
      mutation {
        createFood(foodInput:{title: "${titleRefValue}",
         description: "${descriptionRefValue}" 
         , price: "${priceRefValue}"}) {
          _id
          title
          description
          price
        }
      }              
      `,
    };

    const res = await fetch('http://localhost:8080/graphql', {
      method: 'POST',
      body: JSON.stringify(graphqlQuery),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data: queryData } = await res.json();
    console.log(queryData);

    priceRef.current.value = '';
    descriptionRef.current.value = '';
    titleRef.current.value = '';
  };
  return (
    <VStack>
      <form onSubmit={onSubmitHandler} style={{ marginTop: '7rem' }}>
        <Box>
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Title
            </FormLabel>
            <Input ref={titleRef} type="text" name="title" />
          </Flex>
        </Box>
        <Box mt="2">
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Description
            </FormLabel>
            <Textarea ref={descriptionRef} name="description" size="md" />
          </Flex>
        </Box>
        <Box mt="2">
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Price
            </FormLabel>
            <Input ref={priceRef} type="text" name="price" />
          </Flex>
        </Box>
        <Button mt="3" type="submit">
          Submit
        </Button>
      </form>
    </VStack>
  );
};

export default AddFoodsForm;
