import React from 'react';
import './App.css';
import IncomeStatement from './components/IncomeStatement';
import BalanceSheet from './components/BalanceSheet';

function App() {
  return (
    <div className="App">
      <IncomeStatement />
      <BalanceSheet />
    </div>
  );
}

export default App;
