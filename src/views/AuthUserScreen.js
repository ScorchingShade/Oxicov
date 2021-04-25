import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect,Switch,BrowserRouter as Router} from "react-router-dom";

function AuthUserScreen(props) {
  const [userAuth, setUserAuth] = useState({});
  const [authUser, setAuthUser] = useState();


  useEffect(() => {
      
    const token = localStorage.getItem("token");
   
    if (token === {}) {
      setAuthUser(null);
    
    } else {
      setAuthUser(token);
    }
  });

  if (!authUser) {
    return (
        <Router>
            <Switch>
            <Redirect from="/authHome" to="/home" />
            </Switch>

        </Router>
        
    
    );
  } else {
      
    return (
        <div>
        <h1 className="text-center">DAHBOrd</h1>
      </div>
    );
  }
}

export default AuthUserScreen;
