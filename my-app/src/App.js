import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Post from "./components/pages/Post";

function App() {
  return (
    <Fragment>
      <div></div>
      <Router>
        <div className="App">
          <Header />
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/post/:id">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
