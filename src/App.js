import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavIndex from './components/Navbar/NavIndex'
import HomeScreen from './views/HomeScreen';
import LoginTest from './views/LoginTest';
import Register from './views/Register';
import AuthUserScreen from './views/AuthUserScreen';
import AboutScreen from './views/AboutScreen';
import React, { useState, useEffect } from "react";

function App() {

  const [authUser, setAuthUser] = useState();

  const checkToken=()=>{
    const token = localStorage.getItem("token");
    if (token === {}) {
      setAuthUser(null);
    } else {
      setAuthUser(token);
      console.log("App.js authUser" + JSON.stringify(authUser));
    }
  }

  useEffect(() => {
   checkToken();
  });

  return (
    <Router>
           <NavIndex authUser={authUser}></NavIndex>   
           <Switch>
          
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/home" exact  render={(props) => <HomeScreen {...props}/>}/>
              <Route path="/login" exact component={LoginTest}/>
              <Route path="/signup" exact component={Register}/>
              <Route path="/about" exact component={AboutScreen}/>
              <Route path="/authHome" exact render={(props) => <AuthUserScreen {...props}/>}/>
             </Switch>        
        </Router>
  );
}

export default App;
