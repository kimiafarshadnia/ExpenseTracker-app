import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form
      onSubmit={submitHandler}
      className=" d-flex flex-column justify-content-between mt-3"
    >
      <input
        type="text"
        className="form-control mb-3"
        name="desc"
        onChange={changeHandler}
        required
      />
      <input
        type="number"
        className="form-control mb-3"
        name="amount"
        onChange={changeHandler}
        required
      />

      <input
        type="date"
        name="date"
        className="form-control"
        onChange={changeHandler}
        required
      />
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="radio"
            value="expense"
            name="type"
            id="expense"
            onChange={changeHandler}
            checked={formValues.type === "expense"}
          />
          <label className="ms-2" for="expense">
            expense
          </label>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="radio"
            value="income"
            name="type"
            id="income"
            onChange={changeHandler}
            checked={formValues.type === "income"}
          />
          <label className="ms-2" for="income">
            income
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-success border-2">
        Add
      </button>
    </form>
  );
};

export default TransActionForm;
