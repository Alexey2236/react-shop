import GoodsItem from "./GoodsItem";

function Goodsist(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Товаров нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default Goodsist;
