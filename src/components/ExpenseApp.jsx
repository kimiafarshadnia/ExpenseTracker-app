import { useEffect, useState } from "react";
import NameUser from "./NameUser";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";
import Welcome from "./Welcome";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [nameUser, setNameUser] = useState("");

  const addTransaction = (formValues) => {
    // console.log(formValues);
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  const addNameUserHandler = (name) => {
    console.log(name);
    setNameUser(name);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className=" App  mt-5">
      <NameUser nameUser={nameUser} />
      <Welcome addNameUserHandler={addNameUserHandler} />
      <OverViewComponent
        nameUser={nameUser}
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
