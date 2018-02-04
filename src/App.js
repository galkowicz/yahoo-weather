import React, { Component } from 'react';
import './App.css';
import WeatherContainer from '../src/containers/weatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WeatherContainer unit={'c'} />
      </div>
    );
  }
}

export default App;
