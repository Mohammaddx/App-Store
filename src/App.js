import React from "react";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import Products from "./pages/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
