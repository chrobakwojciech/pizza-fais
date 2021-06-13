import { Button, Box, FormControlLabel, FormControl, RadioGroup, Radio, FormLabel} from '@material-ui/core'
import React, {useContext} from 'react';
import { PizzaContext } from '../context/PizzaContext'

function PizzaPayment() {
  const {getPrice, getUniqueIngredients} = useContext(PizzaContext);

  const [paymentMethod, setPaymentMethod] = React.useState('blik');
  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value)
  } 
  const [receiveMethod, setReceiveMethod] = React.useState('in');
  const handleReceiveMethod = (event) => {
    setReceiveMethod(event.target.value)
  } 

  return (
      <Box p={3}>

        <Box marginBottom={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sposób płatności</FormLabel>
            <RadioGroup value={paymentMethod} onChange={handlePaymentMethod}>
              <FormControlLabel value="blik" control={<Radio />} label="BLIK" />
              <FormControlLabel value="card" control={<Radio />} label="Karta" />
              <FormControlLabel value="cash" control={<Radio />} label="Gotówka" />
            </RadioGroup>
          </FormControl>  
        </Box>
        <Box marginBottom={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sposób odbioru</FormLabel>
            <RadioGroup value={receiveMethod} onChange={handleReceiveMethod}>
              <FormControlLabel value="in" control={<Radio />} label="Na miejscu" />
              <FormControlLabel value="out" control={<Radio />} label="Na wynos" />
            </RadioGroup>
          </FormControl>  
        </Box>

        {getUniqueIngredients().length > 0 ? 
          <Button fullwidth={true} variant="contained" color="primary">
            Zapłać {getPrice()} zł
          </Button> 
          :
          <Button fullwidth={true} disabled variant="contained" color="primary">
            Zapłać
          </Button> 
          }
      </Box>
  );
}

export default PizzaPayment;
