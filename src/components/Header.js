import {
    Heading,
    Flex,
    Spacer,
    Button,
    Icon,
    Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaShoppingCart } from "react-icons/fa"
const Header = () => {
    return (
        <Flex w="100%" p="3">
            <Heading  fontWeight="bold">
                React Order
            </Heading>
            <Spacer />
            <Button>
                <Flex alignItems="center">
                    <Icon as={FaShoppingCart} mr="2" />
                    <Text>0</Text>
                </Flex>
            </Button>
            <ColorModeSwitcher />
        </Flex>
    )
}


export default Header;