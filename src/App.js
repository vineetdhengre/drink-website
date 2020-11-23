import React from "react";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Service from "./Containers/Service";
import Contact from "./Containers/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path="/about" component={About} />
        <Route  exact path="/service" component={Service} />
        <Route  exact path="/contact" component={Contact} />

      </Switch>

    </>

  )
};


export default App;