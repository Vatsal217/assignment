import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import editUser from './components/users/EditUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      
        <Route exact path='/AddUser' component={AddUser}/>
        <Route exact path='/editUser/:id' component={editUser}/>




      </Switch>
  
      
    </div></Router>
  );
}

export default App;
