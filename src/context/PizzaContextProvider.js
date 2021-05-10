import React, {useState} from "react";
import {PizzaContext} from "./PizzaContext";

export default function PizzaContextProvider({children}) {
    const [ingredients, setIngredients] = useState([]);

    const addIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient])
    };

    const value = {
        addIngredient,
        ingredients
    };

    return (
        <PizzaContext.Provider value={value}>
            {children}
        </PizzaContext.Provider>
    )
}