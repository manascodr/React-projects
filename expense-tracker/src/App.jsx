import { useState } from 'react'
import './App.css'
import AddTransactionForm from './components/AddTransactionForm';
import IncomeExpense from './components/IncomeExpense';
import TransactionsList from './components/TransactionsList';
import Header from './components/Header';

function App() {
  const [transactions, settransactions] = useState([
   { id: 1, text: "Salary", amount: 10000 },
   { id: 2, text: "Groceries", amount: -1200 },
   { id: 3, text: "Recharge", amount: -500 },
 ] )



  return (
    <>
    {/* <Header transactions={transactions} settransactions = {settransactions}/> */}
    <AddTransactionForm transactions={transactions} settransactions = {settransactions}/>
    {/* <IncomeExpense transactions={transactions} settransactions = {settransactions}/>
    <TransactionsList transactions={transactions} settransactions = {settransactions}/> */}
    </>
  )
}

export default App
