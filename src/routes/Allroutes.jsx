import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

export default function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/orders">
        <Checkout />
      </Route>
    </Switch>
  );
}
