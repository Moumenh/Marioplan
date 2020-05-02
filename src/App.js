import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectdetails'
import Navbar from './components/layout/navbar';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/singup';
import CreateProject from './components/projects/createproject'

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/create' component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
