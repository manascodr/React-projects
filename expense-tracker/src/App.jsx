import { useState } from 'react'
import './App.css'
import AddTransactionForm from './components/AddTransactionForm';
import IncomeExpense from './components/IncomeExpense';
import TransactionsList from './components/TransactionsList';
import Header from './components/Header';
import { nanoid } from 'nanoid';

function App() {
  const [transactions, settransactions] = useState([
   { id: nanoid(), type: "Salary", amount: 10000 },
   { id: nanoid(), type: "Groceries", amount: -1200 },     
   { id: nanoid(), type: "Recharge", amount: -500 },
 ] )



  return (
    <>
    <div className="app-container">
    <Header transactions={transactions} settransactions = {settransactions}/>
    <IncomeExpense transactions={transactions} settransactions = {settransactions}/>
    <AddTransactionForm transactions={transactions} settransactions = {settransactions}/>
    <TransactionsList transactions={transactions} settransactions = {settransactions}/>
    </div>
    </>
  )
}

export default App
