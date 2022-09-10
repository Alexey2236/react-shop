import { useEffect, useState } from "react";
import Spiner from "./Spiner";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import ProductList from "./ProductList";
import Alert from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(() => {
    const saved = localStorage.getItem("key");
    const result = JSON.parse(saved);
    return result || [];
  });
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/shop?lang=ru", {
      headers: { Authorization: "be4de0dc-7379e7b8-4d1e4468-26da8573" },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(order));
  }, [order]);

  function openCart() {
    setOpen((open) => !open);
  }

  function addToBasket(item) {
    const itemIndex = order.findIndex((elem) => elem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        amount: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((elem, i) => {
        if (i === itemIndex) {
          return {
            ...elem,
            amount: elem.amount + 1,
          };
        } else {
          return elem;
        }
      });

      setOrder(newOrder);
    }
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 1000);
  }

  function removeProductToBasket(id) {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  }

  function incAmount(id) {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount + 1;
        return {
          ...item,
          amount: newAmount,
        };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  }

  function decAmount(id) {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount - 1;
        return {
          ...item,
          amount: newAmount >= 0 ? newAmount : 0,
        };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  }

  return (
    <main className="container content">
      {openAlert ? <Alert /> : null}
      <h3 className="title_top">fortnite skins</h3>
      <Cart count={order.length} openCart={openCart} />

      {loading ? (
        <Spiner />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}

      {open ? (
        <ProductList
          order={order}
          openCart={openCart}
          removeProductToBasket={removeProductToBasket}
          incAmount={incAmount}
          decAmount={decAmount}
        />
      ) : null}
    </main>
  );
}

export default Shop;
