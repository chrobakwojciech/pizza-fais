import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box} from '@material-ui/core'
import React, {useContext} from 'react';
import { PizzaContext } from '../context/PizzaContext'
import Salami from '../presets/Salami.json';


function PizzaInfo() {
  const pizzaPreset = {
    salami: Salami,
    capricciosa: [],
    hawai: [],
    none: []
  };

  const {changePizzaBackground, setPresetPizza} = useContext(PizzaContext);

  const [pizzaSize, setPizzaSize] = React.useState('32');
  const handlePizzaSizeChange = (event) => {
    setPizzaSize(event.target.value);
  }

  const [preset, setPreset] = React.useState('none');
  const handlePresetChange = (event) => {
    setPresetPizza(pizzaPreset[event.target.value])
    setParts('1');
    changePizzaBackground('1');
  
    setPreset(event.target.value);
  } 

  const [parts, setParts] = React.useState("1");
  const handleParts = (event) => {
    setParts(event.target.value);
    changePizzaBackground(event.target.value)
  };

  return (
    <Box p={3}>
        <Box marginBottom={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Rozmiar pizzy</FormLabel>
            <RadioGroup value={pizzaSize} onChange={handlePizzaSizeChange}>
              <FormControlLabel value="29" control={<Radio />} label="Mała (29 cm)" />
              <FormControlLabel value="32" control={<Radio />} label="Średnia (32 cm)" />
              <FormControlLabel value="41" control={<Radio />} label="Duza (41 cm)" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box marginBottom={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Podział pizzy</FormLabel>
            <RadioGroup value={parts} onChange={handleParts}>
              <FormControlLabel value="1" control={<Radio />} label="Całość" />
              <FormControlLabel value="2" control={<Radio />} label="2 kompozycje" />
              <FormControlLabel value="4" control={<Radio />} label="4 kompozycje" />
            </RadioGroup>
          </FormControl>  
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gotowe kompozycje</FormLabel>
            <RadioGroup value={preset} onChange={handlePresetChange}>
              <FormControlLabel value="none" control={<Radio />} label="Własna" />
              <FormControlLabel value="salami" control={<Radio />} label="Salami" />
              <FormControlLabel disabled value="capricciosa" control={<Radio />} label="Capricciosa" />
              <FormControlLabel disabled value="hawai" control={<Radio />} label="Hawajska" />
            </RadioGroup>
          </FormControl>  
        </Box>
      </Box>
  );
}

export default PizzaInfo;
