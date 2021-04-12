import React from 'react';
import './App.css';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import FormHooks from './FormHooks';
import FormInputHooks from './FormInputHooks';

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <FormHooks />
      <FormInputHooks />
    </div>
  );
}

export default App;
