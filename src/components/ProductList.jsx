import Propduct from "./Product";

function ProductList(props) {
  const {
    order = [],
    openCart,
    removeProductToBasket,
    incAmount,
    decAmount,
  } = props;

  let totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.amount;
  }, 0);
  return (
    <ul className="collection cartList">
      <i className="material-icons close" onClick={openCart}>
        close
      </i>
      <li className="collection-item #607d8b blue-grey cart_title">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return (
            <Propduct
              {...item}
              key={item.id}
              removeProductToBasket={removeProductToBasket}
              incAmount={incAmount}
              decAmount={decAmount}
            />
          );
        })
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}

      <li className="collection-item #607d8b blue-grey cart_price">
        Общая стоимость: {totalPrice} руб.{" "}
      </li>
    </ul>
  );
}
export default ProductList;
