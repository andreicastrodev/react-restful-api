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

const AddFoodsForm = () => {
  return (
    <VStack>
      <form style={{ marginTop: '7rem' }}>
        <Box>
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Title
            </FormLabel>
            <Input type="text" name="title" />
          </Flex>
        </Box>
        <Box mt="2">
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Description
            </FormLabel>
            <Textarea name="description" size="md" />
          </Flex>
        </Box>
        <Box mt="2">
          <Flex alignItems="center">
            <FormLabel textTransform="uppercase" fontSize="1xl">
              Amount
            </FormLabel>
            <Input type="text" name="amount" />
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
