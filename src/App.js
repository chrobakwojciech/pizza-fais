import { Container, Grid } from '@material-ui/core';
import './App.css';
import PizzaComponent from './components/PizzaComponent';
import RightMenu from './components/RightMenu';
import PizzaContextProvider from './context/PizzaContextProvider';

function App() {
  return (
    <PizzaContextProvider>
      <Container maxWidth='false' disableGutters='true' className='background-app'>
      <Grid container style={{ height: '100vh' }} direction="row" justify="center" spacing={0}>
        <Grid item xs={8}>
          <PizzaComponent/>
        </Grid>
        <Grid item xs={4}>
          <RightMenu/>
        </Grid>
      </Grid>
    </Container>
    </PizzaContextProvider>
    
  );
}

export default App;
