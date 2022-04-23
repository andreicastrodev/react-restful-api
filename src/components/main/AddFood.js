import { Box, Button, Flex, Input, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

const AddFood = ({ data }) => {
    const textColor = useColorModeValue('black', 'white')
    const backgroundColor = useColorModeValue('white', 'black')
    return (
        <form>
            {
                data.map(el => {
                    return (
                        <Flex direction="column" p="1rem" borderBottom={`1px solid ${textColor}`} >
                            <Flex w="100%" alignItems="center" justifyContent="space-between">
                                <Text>{el.title}</Text>
                                <Flex justifyContent="flex-end" alignItems="center">
                                    <Text ml="3" color={textColor}>
                                        Amount
                                    </Text>
                                    <Input ml="5" w="25%" type="number" placeholder="1" />
                                </Flex>
                            </Flex>
                            <Flex w="100%" alignItems="center" justifyContent="space-between" mt="2">
                                <Text>{el.description}</Text>
                                <Button type="submit">Add</Button>
                            </Flex>
                            <Text>${el.amount}</Text>
                        </Flex>
                    )
                })
            }
        </form>
    )

}


export default AddFood;