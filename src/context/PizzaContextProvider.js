import React, {useState} from "react";
import {PizzaContext} from "./PizzaContext";
import { v4 as uuidv4 } from 'uuid';


export default function PizzaContextProvider({children}) {
    const [ingredients, setIngredients] = useState([]);
    const [pizzaImg, setPizzaImg] = useState('pizza-1');
    const [sauces, setSauces] = useState({
        tomato: false,
        garlic: false
    });

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

        return resIngredients
    }

    const setPresetPizza = (preset) => {
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
        setIngredients(newIngr)
    }

    const [pizzaSize, setPizzaSize] = React.useState('32');

    const getPrice = () => {
        const saucesChecked = Object.values(sauces).filter(v => v === true);
        return (pizzaSize - 5) + getUniqueIngredients().length * 2 + saucesChecked.length * 2;
    };

    const value = {
        addIngredient,
        removeIngredient,
        setPresetPizza,
        getUniqueIngredients,
        ingredients,
        pizzaImg,
        sauces, 
        getPrice,
        setSauces,
        changePizzaBackground,
        pizzaSize, 
        setPizzaSize
    };

    return (
        <PizzaContext.Provider value={value}>
            {children}
        </PizzaContext.Provider>
    )
}