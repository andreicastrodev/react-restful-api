import {
    Heading,
    Flex,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import CheckoutModal from './ui/CheckoutModal';
const Header = () => {
    const backgroundColor = useColorModeValue('white', 'blue.900')
    return (
        <Flex w="100%" p="3" position="fixed" bg={backgroundColor}>
            <Heading fontWeight="bold">
                React Order
            </Heading>
            <Spacer />
            <CheckoutModal />
            <ColorModeSwitcher />
        </Flex>
    )
}
export default Header;


