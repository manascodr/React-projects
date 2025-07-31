import React from "react";

const Header = ({ transactions }) => {
  const balance = transactions.reduce((balance, transaction) => balance + transaction.amount, 0);

  return (
    <div className="balance">
      <p>{`Balance: ₹${balance}`}</p>
    </div>
  );
};

export default Header;
