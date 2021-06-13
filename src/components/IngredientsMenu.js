import React, {useContext, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import {ListItemAvatar, Avatar} from '@material-ui/core';
import { PizzaContext } from '../context/PizzaContext';
import { v4 as uuidv4 } from 'uuid';


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


export default function IngredientsMenu({name, list}) {
  const classes = useStyles();
  const { addIngredient, ingredients } = useContext(PizzaContext);

  const add = (img, name, type) => () => {
    const id = uuidv4();
    addIngredient(img, name, type, id)
  }
  
  return (
    <Paper style={{maxHeight: '100vh', minWidth: '300px', overflow: 'auto'}}>
    <List className={classes.root}>
      {list.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value.index} role={undefined} button onClick={add(`${process.env.PUBLIC_URL}/Icons/${name}/Small/${value.img}`, value.name, name)}>
              <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.large}
                imgProps={{width: '50%'}}
                alt={`Avatar n°${value.index + 1}`}
                src={`${process.env.PUBLIC_URL}/Icons/${name}/Large/${value.img}`} 
              />
            </ListItemAvatar>
            
            <ListItemText id={labelId} primary={`${value.name} (2 zł)`} />
          </ListItem>
        );
      })}
    </List>
    </Paper>
  );
}