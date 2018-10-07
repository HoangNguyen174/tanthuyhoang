import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar.component';
import { Home } from './components/pages/home/Home.component';
import { About } from './components/pages/about/About.component';
import { Projects } from './components/pages/projects/Projects.component';
import { Equipments } from './components/pages/equipments/Equipments.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>   
            <Route path="/projects" component={Projects}/>
            <Route path="/equipments" component={Equipments}/>               
          </Switch>
        </div>     
      </div>
    );
  }
}

export default App;