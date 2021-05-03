import { Container, Grid } from '@material-ui/core';
import './App.css';
import PizzaComponent from './PizzaComponent';
import IngredientsComponent from './IngredientsComponent';

function App() {
  return (
    <Container maxWidth='false' disableGutters='true' className='background-app'>
      <Grid container style={{ height: '100vh' }} direction="row" justify="center" spacing={0}>
        <Grid item xs={8}>
          <PizzaComponent/>
        </Grid>
        <Grid item xs={4}>
          <IngredientsComponent/>
        </Grid>
      </Grid>
    </Container>
    
  );
}

export default App;
