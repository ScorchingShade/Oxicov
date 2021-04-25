import React, { useState, useEffect }from 'react'
import {NavLink, Nav, NavMenu, NavBtn, NavBtnLink} from './NavbarResponsive'
import '../../commonCSS/Navbar.css'

function Sidebar(props) {
    const {showClause}=props;
    const [authUser, setAuthUser] = useState();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token === {}) {
        setAuthUser(null);
      } else {
        console.log("Here is the token" + token);
        setAuthUser(token);
        console.log("Here is the token" + JSON.stringify(authUser));
      }
    });
    if (!authUser) {
    return (
        
        <div className={showClause?"show":"noshow"}>
        {console.log("in SideBar.js "+ showClause)}
           <Nav > 
            <NavMenu>
                <NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/login" activeStyle>Login</NavLink>
                
                <NavLink to="/about" activeStyle>About</NavLink>
                {/* <NavBtnLink to="/register">Signup</NavBtnLink> */}

            </NavMenu>

            <NavBtn>
                <NavBtnLink to="/signup">Signup</NavBtnLink>
            </NavBtn>
        </Nav>
          
        </div>
    )}
    else{
        return (
        
            <div className={showClause?"show":"noshow"}>
            {console.log("in SideBar.js "+ showClause)}
               <Nav > 
                <NavMenu>
                    <NavLink to="/home" activeStyle>Home</NavLink>
                    <NavLink to="/authHome" activeStyle>Dashboard</NavLink>
                    
                    <NavLink to="/about" activeStyle>About</NavLink>
                    {/* <NavBtnLink to="/register">Signup</NavBtnLink> */}
    
                </NavMenu>
    
                <NavBtn>
                    <NavBtnLink to="/logout">Logout</NavBtnLink>
                </NavBtn>
            </Nav>
              
            </div>
        )
    }
}

export default Sidebar
