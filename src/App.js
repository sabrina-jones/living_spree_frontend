import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import NavBar from './components/NavBar';

 class App extends React.Component {
  
  render() {
    return (
      <>
      <CssBaseline />
      <AppBar position="relative">
         <Toolbar>
          <NavBar/>
      </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth = "sm">
          <Typography variant= "h2" align ="center" color = "testPrimary" gutterBottom> 
                Living Spree
          </Typography>
          <Typography variant= "h6" align ="center" color = "testSecondary" paragraph> 
                A way to view and add free and mostly free events. The best things in life are free. This is your chance to go on a living spree.
          </Typography>
        </Container>
      </main>
      <div className="App">
        <CategoriesContainer/>
      </div>
    </>
    );
  }
}


export default App;
