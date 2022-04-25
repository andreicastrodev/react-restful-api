import { Box, useColorModeValue } from "@chakra-ui/react";
import AddFood from "./AddFood";

const Food = ({ data, getDataHandler }) => {
    const backgroundColor = useColorModeValue('white', 'black')


    return (
        <Box bg={backgroundColor} width="60%" p="5" borderRadius="20px">
            <AddFood data={data} />
        </Box>
    )

}


export default Food;