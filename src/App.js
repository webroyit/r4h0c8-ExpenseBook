import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionList } from './components/TransactionList.js';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </>
  );
}

export default App;