import React from 'react'

const TransactionsList = ({transactions,settransactions}) => {

  const displayTransactions = transactions.map((transaction)=>{
    
    return <div className="transaction-item income" key={transaction.id} >
      ₹{transaction.amount}
      {transaction.type}
    </div>
  })

  return (
    <div className="display">
      <div>Transactions List</div>
      <div className="transactions">
        {displayTransactions}
      </div>
    </div>
    
  )
}

export default TransactionsList