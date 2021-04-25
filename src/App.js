import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavIndex from './components/Navbar/NavIndex'
import HomeScreen from './views/HomeScreen';
import LoginTest from './views/LoginTest';
import Register from './views/Register';
import AuthUserScreen from './views/AuthUserScreen';
import React, { useState, useEffect } from "react";

function App() {

  const [authUser, setAuthUser] = useState();

  const checkToken=()=>{
    const token = localStorage.getItem("token");
    if (token === {}) {
      setAuthUser(null);
    } else {
      console.log("App.js" + token);
      setAuthUser(token);
      console.log("App.js authUser" + JSON.stringify(authUser));
    }
  }

  useEffect(() => {
   checkToken();
  });

  return (
    <Router>
           <NavIndex token={authUser}></NavIndex>   
           <Switch>
          
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/home" exact  render={(props) => <HomeScreen {...props}/>}/>
              <Route path="/login" exact component={LoginTest}/>
              <Route path="/signup" exact component={Register}/>
              <Route path="/authHome" exact render={(props) => <AuthUserScreen {...props}/>}/>
             </Switch>        
        </Router>
  );
}

export default App;
