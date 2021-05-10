import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Image } from 'react-konva';

import useImage from 'use-image';

export default function Ingredient({img}) {
  const [image] = useImage(img);

  const [state, setState] = React.useState({
    isDragging: false,
    x: 350,
    y: 350
  });

  return (
    <Image
      image={image}
      x={state.x}
      y={state.y}
      draggable
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
  )
}