import React from 'react';
import './App.css';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import FormHooks from './FormHooks';
import FormInputHooks from './FormInputHooks';
import Clicker from './Clicker';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <FormHooks />
      <FormInputHooks />
      <Clicker />
      <Movies />
    </div>
  );
}

export default App;
