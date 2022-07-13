import { useState } from "react";

const Welcome = ({ addNameUserHandler }) => {
  const [name, setNameValue] = useState("");

  const changeNameHandler = (e) => {
    // console.log(e.target.value);
    setNameValue(e.target.value);
  };

  const submitNameHandler = (e) => {
    e.preventDefault();
    // console.log(name);
    addNameUserHandler(name);
  };

  return (
    <form onSubmit={submitNameHandler}>
      <h1 className="mb-5">Welcome To Your Expense Tracker !</h1>
      <div className="d-flex flex-column justify-content-center">
        <input
          type="text"
          name="nameUser"
          className="form-control mb-3 col-6"
          onChange={changeNameHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-5">
        Continue
      </button>
    </form>
  );
};

export default Welcome;
