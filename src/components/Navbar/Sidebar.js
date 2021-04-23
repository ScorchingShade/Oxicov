import React from 'react'
import {NavLink, Nav, NavMenu, NavBtn, NavBtnLink} from './NavbarResponsive'
import '../../commonCSS/Navbar.css'

function Sidebar(props) {
    const {showClause}=props;
   
    
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
    )
}

export default Sidebar
