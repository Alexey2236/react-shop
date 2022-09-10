function GoodsItem(props) {
  const { id, name, price, full_background, addToBasket } = props;
  return (
    <div className="projects__wrapper">
      <img src={full_background} alt={name} className="projects__img" />
      <div className="descr__inner">
        <span className="projects__subtitle">{name}</span>

        <span className="price">{price} руб.</span>
      </div>
      <button
        className="btn"
        onClick={() =>
          addToBasket({
            id,
            name,
            price,
          })
        }
      >
        Купить
      </button>
    </div>
  );
}

export default GoodsItem;
