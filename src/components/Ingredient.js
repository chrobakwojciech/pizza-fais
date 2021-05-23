import React from 'react';
import { Stage, Group, Rect, Circle, Text, Image } from 'react-konva';
import { dimensions } from '../imgDim'

import useImage from 'use-image';

export default function Ingredient({ingr}) {
  const [image] = useImage(ingr.img);


  const [state, setState] = React.useState({
    isDragging: false,
    x: ingr.x || 350,
    y: ingr.y || 350
  });

  return (
    <Group draggable>
    <Image
      image={image}
      x={state.x-(dimensions(image).width/2)}
      y={state.y+(dimensions(image).height/2)}
    
      onDragStart={() => {
        setState({
          ...state,
          isDragging: true
        });
      }}
      onDragEnd={e => {
        setState({
          isDragging: false,
          x: e.target.x(),
          y: e.target.y()
        });
      }}
    />


    <Image
      image={image}
      x={state.x}
      y={state.y}
      onDragStart={() => {
        setState({
          ...state,
          isDragging: true
        });
      }}
      onDragEnd={e => {
        setState({
          isDragging: false,
          x: e.target.x(),
          y: e.target.y()
        });
      }}
    />

    <Image
      image={image}
      x={state.x+(dimensions(image).width/2)}
      y={state.y+(dimensions(image).height/2)}
      onDragStart={() => {
        setState({
          ...state,
          isDragging: true
        });
      }}
      onDragEnd={e => {
        setState({
          isDragging: false,
          x: e.target.x(),
          y: e.target.y()
        });
      }}
    />
  </Group>
  )
}