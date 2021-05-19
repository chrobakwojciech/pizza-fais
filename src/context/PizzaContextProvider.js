import React, {useState} from "react";
import {PizzaContext} from "./PizzaContext";

export default function PizzaContextProvider({children}) {
    const [ingredients, setIngredients] = useState([]);
    const [pizzaImg, setPizzaImg] = useState('pizza-1');

    const addIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient])
    };

    const changePizzaBackground = (parts) => {
        setPizzaImg(`pizza-${parts}`)
    }

    const value = {
        addIngredient,
        ingredients,
        pizzaImg,
        changePizzaBackground
    };

    return (
        <PizzaContext.Provider value={value}>
            {children}
        </PizzaContext.Provider>
    )
}