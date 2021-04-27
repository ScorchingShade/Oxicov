import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect,Switch,BrowserRouter as Router} from "react-router-dom";

function AuthCheck(props) {
  const [userAuth, setUserAuth] = useState({});
  const [authUser, setAuthUser] = useState();

  const reloadFunc=()=>{
    window.location.reload(false);
    (setTimeout(() =>{
      
      
        props.history.push("/authHome")
      },200))
  }

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
    reloadFunc()
    return (
        <div>
        <h1 className="text-center">Auth success</h1>
      </div>
    );
  }
}

export default AuthCheck;
