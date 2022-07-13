import Welcome from "./Welcome";
const FirstPge = (nameUser, addNameUserHandler) => {
  return (
    <div>
      <Welcome addNameUserHandler={addNameUserHandler} />
    </div>
  );
};

export default FirstPge;
