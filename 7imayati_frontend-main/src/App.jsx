import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import About from "./pages/About";
import Browse from "./pages/Browse";
import Data from "./pages/Data";
import FAQ from "./pages/FAQ";
import { Home, Login, Register, NotFoundPage } from "./pages/index";
import Map from "./pages/Map";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/data" component={Data} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Faq" component={FAQ} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
