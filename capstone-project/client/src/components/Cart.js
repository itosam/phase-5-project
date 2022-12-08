import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"
import ItemCartCard from "./ItemCartCard";

const Cart = () => {
const [itemInCart, setItemInCart] = useState([])
   
    useEffect(() => {
        fetch("/cart_items")
            .then((r) => r.json())
            .then((item) => setItemInCart(item));
    }, []);

    function handleDeleteItem(id){
        const updateItemInCartArr = itemInCart.filter((p) => p.id !== id);
        setItemInCart(updateItemInCartArr);
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          {itemInCart.map((item) => {
            return (
              <ItemCartCard
                key={item.id}
                item={item.item}
                id={item.id}
                onDeleteItem={handleDeleteItem}
              />
            );
          })}
        </div>
        <Link to='/checkout'>
        <Button>Check out</Button>
        </Link>
      </div>
    );
};

export default Cart;
