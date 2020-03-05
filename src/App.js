import React, { Component } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Form from "./layout/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import About from "./layout/About";
import Particles from 'react-particles-js';

// import Image from './components/image'
class App extends Component {
  render() {
    console.log("BASENAME TAREM:", process.env);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
                              <Particles 
                              canvasClassName="example"
        params={{ 
          particles: { 
            number: { 
              value: 46, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
        <div id="App">
        
          <Header pageWrapId={"page-wrap"} outerContainerId={"App"}></Header>
          <div id="page-wrap">
            {/* <Switch> */}
              <Route exact path="/" component={Main} />
              <Route path="/form" component={Form} />
              <Route path="/about" component={About} />
            {/* </Switch> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
