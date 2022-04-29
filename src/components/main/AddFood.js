import FoodItems from "./FoodItems";
import CartContext from "../../store/cart-context";
import { useContext, useEffect } from "react";
const AddFood = ({ data }) => {

    const ctx = useContext(CartContext)


    useEffect(() => {

        const fetchFoods = async () => {
            const graphqlQuery = {
                query: `
            query{
                getFoods{
                    foods{
                      _id
                      title
                      description
                      price
                    }
                    
                }
              }           
            `,
            };

            const res = await fetch('http://localhost:8080/graphql', {
                method: 'POST',
                body: JSON.stringify(graphqlQuery),
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const { data } = await res.json()

            ctx.addAvailableItems(data.getFoods.foods);
            console.log(data.getFoods.foods);
        }

        fetchFoods();

    }, [])

    return (
        <>
            {
                ctx.availableItems.map(el => {
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