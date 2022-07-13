const NameUser = ({ nameUser }) => {
  return (
    <div className="d-flex justify-content-start align-items-center mb-5">
      <div className="avatar">
        <img src="" alt="" srcset="" />
      </div>
      <div className="text-start ms-2">
        <p className="m-0">Welcome!</p>
        <p className="m-0">{nameUser}</p>
      </div>
    </div>
  );
};

export default NameUser;
