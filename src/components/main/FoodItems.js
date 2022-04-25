import { Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";
const FoodItems = ({ title, price, description, id, }) => {
    const textColor = useColorModeValue('black', 'white')
    const amountRef = useRef();
    const ctx = useContext(CartContext);

    const addFoodHandler = (e) => {
        e.preventDefault();
        const amountRefValue = +amountRef.current.value;
        const foodData = {
            id,
            title,
            description,
            price,
            amount: amountRefValue
        }
        console.log(amountRefValue);
        ctx.addItem(foodData);
    }

    return (
        <form onSubmit={addFoodHandler}>
            <Flex direction="column" p="1rem" borderBottom={`1px solid ${textColor}`} >
                <Flex w="100%" alignItems="center" justifyContent="space-between">
                    <Text>{title}</Text>
                    <Flex justifyContent="flex-end" alignItems="center">
                        <Text ml="3" color={textColor}>
                            Amount
                        </Text>
                        <Input ref={amountRef} ml="5" w="25%" type="number" placeholder="1" />
                    </Flex>
                </Flex>
                <Flex w="100%" alignItems="center" justifyContent="space-between" mt="2">
                    <Text>{description}</Text>
                    <Button type="submit">Add</Button>
                </Flex>
                <Text>${price}</Text>
            </Flex>
        </form>

    )
}


export default FoodItems;