const TransActionComponent = ({ transactions }) => {
  return (
    <section className="container d-flex flex-column my-3 h-100">
      {transactions.map((t) => (
        <div
          className="splitTransaction d-flex justify-content-between align-items-center"
          key={t.id}
        >
          <p>{t.desc}</p>
          <p>{t.amount}</p>
          <p>{t.date}</p>
        </div>
      ))}
    </section>
  );
};

export default TransActionComponent;
