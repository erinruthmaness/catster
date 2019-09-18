import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
