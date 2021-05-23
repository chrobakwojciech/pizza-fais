import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Box, Typography, Divider} from '@material-ui/core';
import { Adjust, Receipt, Payment, Home } from '@material-ui/icons';
import IngredientsMenu from './IngredientsMenu';
import vegetable from '../lists/Vegetable.json'
import cheese from '../lists/Cheese.json';
import fish from '../lists/Fish.json';
import fruit from '../lists/Fruit.json';
import meat from '../lists/Meat.json';
import spice from '../lists/Spice.json';
import PizzaInfo from './PizzaInfo';
import PizzaSummary from './PizzaSummary';
import PizzaPayment from './PizzaPayment';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  item: {
    padding: 2
  }
}));

export default function RightMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<Home />} label="Start" {...a11yProps(0)} />
        <Divider />
        <Tab icon={<Adjust />} label="Warzywa" {...a11yProps(1)} />
        <Tab icon={<Adjust />} label="Ser" {...a11yProps(2)} />
        <Tab icon={<Adjust />} label="Mięso" {...a11yProps(3)} />
        <Tab icon={<Adjust />} label="Ryby" {...a11yProps(4)} />
        <Tab icon={<Adjust />} label="Owoce" {...a11yProps(5)} />
        <Tab icon={<Adjust />} label="Przyprawy" {...a11yProps(6)} />
        <Divider />
        <Tab icon={<Receipt />} label="Podsumowanie" {...a11yProps(7)} />
        <Divider />
        <Tab icon={<Payment />} label="Płatność" {...a11yProps(8)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PizzaInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IngredientsMenu name="Vegetable" list={vegetable} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <IngredientsMenu name="Cheese" list={cheese} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <IngredientsMenu name="Meat" list={meat} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <IngredientsMenu name="Fish" list={fish} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <IngredientsMenu name="Fruit" list={fruit} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <IngredientsMenu name="Spice" list={spice} />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <PizzaSummary/>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <PizzaPayment/>
      </TabPanel>
    </div>
  );
}

