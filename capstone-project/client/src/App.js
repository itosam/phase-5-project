import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ItemInfo from "./components/ItemInfo";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Cart from "./components/Cart";
import Account from "./components/Account"
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import { UserContext } from "./components/context/Users";
import { IsLoginContext } from "./components/context/IsLogin";
import { ReviewsContext } from "./components/context/Reviews";

function App() {
    const [items, setItems] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const { setIsLogin } = useContext(IsLoginContext);
    const { setReviews } = useContext(ReviewsContext);

    useEffect(() => {
      fetch("/items")
      .then((res)=> res.json())
      .then((items)=> {setItems(items);
     console.log(items)})
    }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setIsLogin(true);
          setUser(user);
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route path="/ItemInfo/:id">
            <ItemInfo />
          </Route>
          <Route path="/login">{user !== null ? <Account /> : <Login />}</Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
