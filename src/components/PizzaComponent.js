import React, {useContext, useEffect, useState} from "react";
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import Ingredient from './Ingredient'
import { PizzaContext } from '../context/PizzaContext'

function PizzaComponent() {
  const { addIngredient, ingredients } = useContext(PizzaContext);

  return (
    <div className='pizza-desk'>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {ingredients.map(ingr => {
            return (
              <Ingredient img={ingr}/>
            )
          })}
          {/* <Ingredient img={`${process.env.PUBLIC_URL}/Icons/Vegetable/Small/Broccoli.png`} />
          <Ingredient img={`${process.env.PUBLIC_URL}/Icons/Vegetable/Small/Onion.png`} />
          <Ingredient img={`${process.env.PUBLIC_URL}/Icons/Vegetable/Small/Tomato.png`} />
          <Ingredient img={`${process.env.PUBLIC_URL}/Icons/Vegetable/Small/Mushroom.png`} />
          <Ingredient img={`${process.env.PUBLIC_URL}/Icons/Vegetable/Small/Zucchini.png`} /> */}
        </Layer>
      </Stage>

    </div>

  );
}

export default PizzaComponent;


