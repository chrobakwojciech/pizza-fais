import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core'
import React, {useContext} from 'react';
import { PizzaContext } from '../context/PizzaContext'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(7) * 2,
    height: theme.spacing(7),
  }
}));


function PizzaSummary() {
  const {removeIngredient, getUniqueIngredients} = useContext(PizzaContext);

  const classes = useStyles();

  const remove = (type) => () => {
    removeIngredient(type);
  }
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
            
            <ListItemText id={labelId} primary={value.name} />
          </ListItem>
        );
      })}
    </List>
    </Paper>
  );
}

export default PizzaSummary;
