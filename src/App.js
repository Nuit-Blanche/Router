import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"

import History from "./History"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <div className="wall"/>
                <div className="nav">
                    <NavLink exact to="/cape-d'invisbilité-il-n'y-a-rien-après-le-slash-voyons" activeClassName="selected">La grande salle</NavLink>
                    <NavLink exact to="/tu-ne-recevras-pas-ta-lettre-de-poudlard-ouin-ouin" activeClassName="selected">Lettre à Poudlard</NavLink>
                    <NavLink exact to="/dumbledore-est-gay-il-se-tapait-grindelwald" activeClassName="selected">  La pensine</NavLink>
                </div>

                <Switch>
                    <Route exact path="/cape-d'invisbilité-il-n'y-a-rien-après-le-slash-voyons" component={Home}/>
                    <Route path="/tu-ne-recevras-pas-ta-lettre-de-poudlard-ouin-ouin" component={Contact}/>
                    <Route path="/dumbledore-est-gay-il-se-tapait-grindelwald" component={History}/>

                </Switch>
            </div>
        </BrowserRouter>



    );
  }
}

export default App;