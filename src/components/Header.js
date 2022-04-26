import {
    Link as RouteLink
} from 'react-router-dom';

import {
    Heading,
    Flex,
    Spacer,
    useColorModeValue,
    Link
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import CheckoutModal from './ui/CheckoutModal';

const Header = () => {
    const backgroundColor = useColorModeValue('white', 'blue.900')
    return (
        <Flex w="100%" p="3" bg={backgroundColor} alignItems="center">
            <Heading fontWeight="bold">
                React Order
            </Heading>
            <Spacer />
            <Flex flexBasis="20%" justifyContent="space-around">
                <Link textDecor="none" fontSize="2xl" textTransform="uppercase" as={RouteLink} to="/">Home</Link>

                <Link textDecor="none" fontSize="2xl" textTransform="uppercase" as={RouteLink} to="/addfood">Add Food</Link>
            </Flex>
            <Spacer />
            <CheckoutModal />
            <ColorModeSwitcher />
        </Flex>
    )
}
export default Header;


