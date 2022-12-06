import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ItemInfo from "./components/ItemInfo";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Cart from "./components/Cart";


function App() {
    const [items, setItems] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
      fetch("/items")
      .then((res)=> res.json())
      .then((items)=> {setItems(items);
     console.log(items)})
    }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/ItemInfo/:id">
            <ItemInfo />T
          </Route>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
