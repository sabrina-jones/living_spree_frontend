import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';

 class App extends React.Component {
  
  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/categories')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }
  
  render() {
    return (
      <div className="App">
        <CategoriesContainer/>
      </div>
    );
  }
}


export default App;
