import { Box, Button, Flex, Input, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import FoodItems from "./FoodItems";

const AddFood = ({ data }) => {
    return (
        <>
            {
                data.map(el => {
                    return (
                        <FoodItems title={el.title}
                            price={el.price}
                            description={el.description}
                            id={el.id}
                            key={el.id}
                        />
                    )
                })
            }
        </>
    )

}


export default AddFood;