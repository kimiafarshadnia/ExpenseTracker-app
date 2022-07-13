import TransActionForm from "./TranseActionForm";
const Modal = ({ addTransaction }) => {
  return (
    <div className="Modal">
      <div className="modalContent">
        <div className="modalHeader">
          <div className="modalTitle">
            <h4>Add Your Transaction</h4>
          </div>
        </div>
        <div className="modalBody">
          <TransActionForm addTransaction={addTransaction} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
