import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText} from '@material-ui/core'
import React, {useContext} from 'react';
import { PizzaContext } from '../context/PizzaContext'
import { makeStyles } from '@material-ui/core/styles';
import { getByPlaceholderText } from '@testing-library/react';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(7) * 2,
    height: theme.spacing(7),
  },
  root2: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));


function PizzaSummary() {
  const {removeIngredient, getUniqueIngredients, getPrice, sauces, setSauces} = useContext(PizzaContext);

  const classes = useStyles();

  const remove = (type) => () => {
    removeIngredient(type);
  }

  const handleSauceChange = (event) => {
    setSauces({ ...sauces, [event.target.name]: event.target.checked });
  };
  
  const { garlic, tomato } = sauces;

  return (
    <Paper style={{maxHeight: '100vh', minWidth: '300px', overflow: 'auto'}}>
    <List className={classes.root}>
      {getUniqueIngredients().map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem key={value.index} role={undefined} button onClick={remove(value.name)}>
              <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.large}
                imgProps={{width: '50%'}}
                src={`${process.env.PUBLIC_URL}/Icons/${value.type}/Large/${value.name}.png`} 
              />
            </ListItemAvatar>
            
            <ListItemText id={labelId} primary={`${value.name} (2 zł)`} />
          </ListItem>
        );
      })}
    </List>
    
    
    {getUniqueIngredients().length > 0 && 
      <div>
        <div className={classes.root2}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Sosy</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={garlic} onChange={handleSauceChange} name="garlic" />}
              label="Czosnkowy (2 zł)"
            />
            <FormControlLabel
              control={<Checkbox checked={tomato} onChange={handleSauceChange} name="tomato" />}
              label="Pomidorowy (2 zł)"
            />
          </FormGroup>
        </FormControl>
      </div>

      <Box paddingLeft={4} marginTop={3}>
        Cena: {getPrice()} zł
      </Box>
      </div>
    }
    </Paper>
  );
}

export default PizzaSummary;
