import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

import ProductsList from './products/ProductsList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <ProductsList/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
