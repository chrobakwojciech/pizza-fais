import React, {useContext, useEffect, useState} from "react";
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import Ingredient from './Ingredient'
import { PizzaContext } from '../context/PizzaContext'

function PizzaComponent() {
  
  const {
    ingredients,
    pizzaImg,
    setPosition,
    changePizzaBackground } = useContext(PizzaContext);

    
  const pizzaStyle = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/${pizzaImg}.png')`,
    height: '100vh',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={pizzaStyle}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {ingredients.map(ingr => {
            return (
              <Ingredient key={ingr.id} ingr={ingr} onPosChange={setPosition}/>
            )
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default PizzaComponent;
