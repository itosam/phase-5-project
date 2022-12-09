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
        <div>
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
        <button className="login_button" style={{margin:"2%"}}><strong>Check out</strong></button>
        </Link>
      </div>
    );
};

export default Cart;
