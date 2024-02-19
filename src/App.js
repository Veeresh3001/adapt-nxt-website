import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import DashBoard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Shipping from "./components/Shipping";
import Orders from "./components/Orders";
import Channel from "./components/Channel";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/orders" component={Orders} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/channel" component={Channel} />
      </Switch>
    </div>
  );
};

export default App;
