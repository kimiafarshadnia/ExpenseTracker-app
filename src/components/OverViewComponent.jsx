import { useState } from "react";

import { BiUpArrowAlt, BiDownArrowAlt, BiX, BiPlus } from "react-icons/bi";
import Modal from "./Modal";

const OverViewComponent = ({ income, expense, addTransaction, nameUser }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="container">
      <div className="cardUser">
        <div className=" d-flex flex-column  justify-content-between align-items-center my-3">
          <h5>Total Balance </h5>
          <h1>$ {income - expense}</h1>
        </div>

        <div className="d-flex  justify-content-between justify-content-sm-around align-items-center my-4">
          <div className="Box d-flex justify-content-center align-items-center mb-3 mb-sm-0">
            <i className="Bicons me-2 text-danger">
              <BiUpArrowAlt />
            </i>
            <div className="d-flex flex-column justify-content-start align-items-center">
              <p className="m-0">Expense</p>
              <p className="text-start">{expense}</p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-center">
            {nameUser}
          </div>
          <div className="Box d-flex justify-content-center align-items-center mb-3 mb-sm-0">
            <i className="Bicons me-2">
              <BiDownArrowAlt />
            </i>
            <div className="d-flex flex-column justify-content-start align-items-center">
              <p className="m-0">Incom</p>
              <p className="text-start">{income}</p>
            </div>
          </div>
        </div>
      </div>

      {/* {isShow && <TransActionForm addTransaction={addTransaction} />} */}
      {isShow && <Modal addTransaction={addTransaction} />}
      <div className="menuBottom">
        <div>
          <button
            className={`d-flex justify-content-center align-items-center ${
              isShow ? "btnCancel" : "btnAdd"
            }`}
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            {isShow ? <BiX /> : <BiPlus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
