import React from 'react';
import './App.css';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import FormHooks from './FormHooks';
import FormInputHooks from './FormInputHooks';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <FormHooks />
      <FormInputHooks />
      <Clicker />
    </div>
  );
}

export default App;
