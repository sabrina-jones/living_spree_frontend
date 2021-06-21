import React from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from './actions/fetchCategories';

 class App extends React.Component {
  
  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/categories')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }
  
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}


export default connect(null, {fetchCategories})(App);
