import React, {useState} from "react";
import {PizzaContext} from "./PizzaContext";
import { v4 as uuidv4 } from 'uuid';


export default function PizzaContextProvider({children}) {
    const [ingredients, setIngredients] = useState([]);
    const [pizzaImg, setPizzaImg] = useState('pizza-1');

    const addIngredient = (img, name, type, id, x, y) => {
        const ingr = {
            img,
            id,
            type,
            name,
            x: x || 350,
            y: y || 350
        }
        setIngredients([...ingredients, ingr])
    };

    const removeIngredient = (name) => {
        const currentIngr = [...ingredients];
        const resIngr = currentIngr.filter(ingr => ingr.name !== name);
        console.log(2, resIngr);
        setIngredients(resIngr);
    }

    const changePizzaBackground = (parts) => {
        setPizzaImg(`pizza-${parts}`)
    }

    const getUniqueIngredients = () => {
        const resIngredients = [];
        for (const ingr of ingredients) {
            const currentIngrType = resIngredients.map(ingr => ingr.name);
            if (!currentIngrType.includes(ingr.name)) {
                resIngredients.push(ingr)
            }
        }

        console.log(resIngredients);
        return resIngredients
    }

    const setPresetPizza = (preset) => {
        console.log(preset)
        setIngredients([]);
        const newIngr = [];
        for (const ingredient of preset) {
            const ingr = {
                img: `${process.env.PUBLIC_URL}/Icons/${ingredient.type}/Small/${ingredient.name}.png`,
                id: uuidv4(),
                type: ingredient.type,
                name: ingredient.name,
                x: ingredient.x,
                y: ingredient.y
            }
            newIngr.push(ingr);
        }
        console.log(1, newIngr);
        setIngredients(newIngr)
    }

    const value = {
        addIngredient,
        removeIngredient,
        setPresetPizza,
        getUniqueIngredients,
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