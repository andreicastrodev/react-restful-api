import {
    Heading,
    Flex,
    Spacer,
    Button,
    Icon,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    HStack,
    Box,
    VStack,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa"


const ChartModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textColor = useColorModeValue('black', 'white')
    const backgroundColor = useColorModeValue('gray.100', 'blue.700')

    return (
        <>
            <Button onClick={onOpen}>
                <Flex alignItems="center">
                    <Icon as={FaShoppingCart} mr="2" />
                    <Text>0</Text>
                </Flex>
            </Button>

            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex justifyContent="space-between" alignItems="center" p="1rem" borderBottom={`1px solid ${textColor}`}>
                            <Heading fontSize="1xl">Sushi</Heading>
                            <Flex alignItems="center" >
                                <Text mr="2">
                                    $29.22
                                </Text>
                                <Text color={textColor} bg={backgroundColor} p="1" borderRadius="5px" fontWeight="bold">
                                    x 1
                                </Text>
                            </Flex>
                            <Flex alignSelf="end" >
                                <IconButton mr="2" icon={<FaPlus />} />
                                <IconButton icon={<FaMinus />} />
                            </Flex>

                        </Flex>
                        <Flex mt="5" justifyContent="space-between" alignItems="center">
                            <Heading fontSize="2xl">Total Amount</Heading>
                            <Text fontSize="2xl">$46.55</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Checkout</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

const Header = () => {
    return (
        <Flex w="100%" p="3">
            <Heading fontWeight="bold">
                React Order
            </Heading>
            <Spacer />
            <ChartModal />
            <ColorModeSwitcher />
        </Flex>
    )
}
export default Header;


