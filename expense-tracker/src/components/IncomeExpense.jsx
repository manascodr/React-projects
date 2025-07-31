import React from "react";

const IncomeExpense = ({ transactions }) => {
  const { income, expense } = transactions.reduce((totals, transaction) => {
      if (transaction.amount > 0) {
        totals.income += transaction.amount;
      } else {
        totals.expense += transaction.amount;
      }
      return totals;
    },   { income: 0, expense: 0 }
  );

  return (
    <div className="expences">
      <div className="tincome">Total Income: ₹{income}</div>
      <div className="texpense">Total Expense: ₹{Math.abs(expense)}</div>
    </div>
  );
};

export default IncomeExpense;
