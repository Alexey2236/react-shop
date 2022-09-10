function Product(props) {
  const {
    name,
    id,
    price,
    amount,
    removeProductToBasket,
    decAmount,
    incAmount,
  } = props;

  return (
    <li className="collection-item product ">
      {name} x{" "}
      <button className="amountBtn" onClick={() => decAmount(id)}>
        -
      </button>
      {amount}
      <button className="amountBtn" onClick={() => incAmount(id)}>
        +
      </button>{" "}
      = {price * amount}
      <span className="secondary-content">
        <i
          className="material-icons"
          style={{ cursor: "pointer" }}
          onClick={() => removeProductToBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}
export default Product;
