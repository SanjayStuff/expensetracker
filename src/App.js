import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
