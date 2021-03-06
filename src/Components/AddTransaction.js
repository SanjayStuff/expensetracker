import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidV4 } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidV4(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button disabled={!text || !amount} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
