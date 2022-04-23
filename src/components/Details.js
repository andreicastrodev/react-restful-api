import { Box, Image, Text, VStack, Flex, Heading, useColorModeValue } from "@chakra-ui/react"
import Buffed from "../images/pic.jpg"
const Details = () => {

    const textColor = useColorModeValue('black', 'white')
    const backgroundColor = useColorModeValue('white', 'black')
    return (
        <VStack>
            <Box w="50%"
                bgColor={backgroundColor}
                p="3"
                mt="7rem"
                mb="5rem"
                borderRadius="20px"
            >
                <Flex direction="column" alignItems="center">
                    <Heading fontSize="3xl" color={textColor}>
                        Delicious food, delivered to you
                    </Heading>
                    <Text mt="3" color={textColor}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                        nesciunt blanditiis ab, magni vero hic, earum recusandae a illum modi nemo
                        enim unde alias mollitia error accusantium libero, fugiat possimus!
                    </Text>
                    <Text mt="3" color={textColor}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                        nesciunt blanditiis ab, magni vero hic, earum recusandae a illum modi nemo
                        enim unde alias mollitia error accusantium libero, fugiat possimus!
                    </Text>
                </Flex>
            </Box>
        </VStack>

    )
}

export default Details;