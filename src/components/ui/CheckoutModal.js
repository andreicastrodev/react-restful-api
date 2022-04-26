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
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa"
import { useContext } from 'react';
import CartContext from '../../store/cart-context';


const CheckoutModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textColor = useColorModeValue('black', 'white')
    const backgroundColor = useColorModeValue('gray.100', 'blue.700')
    const ctx = useContext(CartContext)


    const totalAmount = ctx.items.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0)


    const addItemHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 })
    }

    const removeItemHandler = (id) => {
        ctx.removeItem(id)
    }


    return (
        <>
            <Button onClick={onOpen}>
                <Flex alignItems="center">
                    <Icon as={FaShoppingCart} mr="2" />
                    <Text>{totalAmount}</Text>
                </Flex>
            </Button>

            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        {
                            ctx.items.map(item => {
                                return (
                                    <Flex justifyContent="space-between" alignItems="center" p="1rem" borderBottom={`1px solid ${textColor}`}>
                                        <Text fontSize="2xl">{item.title}</Text>
                                        <Flex alignItems="center" >
                                            <Text fontSize="2xl" mr="2">
                                                ${item.price}
                                            </Text>
                                            <Text color={textColor} bg={backgroundColor} p="1" borderRadius="5px" fontWeight="bold">
                                                x {item.amount}
                                            </Text>
                                        </Flex>
                                        <Flex alignSelf="end" >
                                            <IconButton onClick={addItemHandler.bind(null, item)} mr="2" icon={<FaPlus />} />
                                            <IconButton onClick={removeItemHandler.bind(null, item.id)} icon={<FaMinus />} />
                                        </Flex>
                                    </Flex>

                                )
                            })
                        }
                        <Flex mt="5" justifyContent="space-between" alignItems="center">
                            <Heading fontSize="2xl">Total Amount</Heading>
                            <Text fontSize="2xl">${ctx.totalAmount.toFixed(2)}</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="messenger" variant='solid'>Order</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default CheckoutModal;