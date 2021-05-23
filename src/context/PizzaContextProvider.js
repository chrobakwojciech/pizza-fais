import React, {useState} from "react";
import {PizzaContext} from "./PizzaContext";

export default function PizzaContextProvider({children}) {
    const [ingredients, setIngredients] = useState([]);
    const [pizzaImg, setPizzaImg] = useState('pizza-1');

    const addIngredient = (img, name, type, id) => {
        const ingr = {
            img,
            id,
            type,
            name
        }
        setIngredients([...ingredients, ingr])
    };

    const removeIngredient = (id) => {
        const currentIngr = [...ingredients];
        const resIngr = currentIngr.filter(ingr => ingr.id !== id);
        setIngredients(resIngr);
    }

    const changePizzaBackground = (parts) => {
        setPizzaImg(`pizza-${parts}`)
    }

    const value = {
        addIngredient,
        removeIngredient,
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