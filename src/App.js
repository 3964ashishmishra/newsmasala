import React, { Component } from 'react'
import Navabar from './components/Navabar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




export default class App extends Component 
{
  
  render() {
    return (
      <>
       <Router>
        <Navabar/> 
        <Switch>
          <Route exact path="/newsmasala/"><News key="general" pageSize={5} category="general"/></Route> 
          <Route exact path="/newsmasala/business"><News key="business" pageSize={5} category="business"/></Route> 
          <Route exact path="/newsmasala/entertainment"><News key="entertainment" pageSize={5} category="entertainment"/></Route> 
          <Route exact path="/newsmasala/general"><News key="general" pageSize={5} category="general"/></Route> 
          <Route exact path="/newsmasala/health"><News key="health" pageSize={5} category="health"/></Route> 
          <Route exact path="/newsmasala/science"><News key="science" pageSize={5} category="science"/></Route> 
          <Route exact path="/newsmasala/sports"><News key="sports" pageSize={5} category="sports"/></Route> 
          <Route exact path="/newsmasala/technology"><News key="technology" pageSize={5} category="technology"/></Route> 
        </Switch>
        </Router>
      </>
    )
  }
}
