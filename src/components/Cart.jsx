function Cart(props) {
  const { openCart, count } = props;
  return (
    <div className="cart deep-purple lighten-2" onClick={openCart}>
      <i className="material-icons">local_mall</i>
      {count ? <span className="count">{count}</span> : null}
    </div>
  );
}

export default Cart;
