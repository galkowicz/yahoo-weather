import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Daily from '../src/components/dailyView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Daily />
      </div>
    );
  }
}

export default App;
