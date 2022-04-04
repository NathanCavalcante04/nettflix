import React, { Component } from "react";

import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
body{
  background-color:black;
}
`;

const NEY = styled.h1`
  font-size: 6vw;
  width: 100vw;
  font-weight: 20vw;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LIST = styled.ul`
width:100%;    
display:flex;
justify-content:center;
align-items:center;
font-size:2vw;
margin-left:13vw;
margin-top:5vw;


li{
  list-style:none;
  width:100%;
  margin-left:vw;
  height:
  
  

  
`;

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div>
          <NEY>NEYT<spam>FLIX </spam> </NEY>
          <nav>
            <LIST>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </LIST>
          </nav>

          <Switch>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
