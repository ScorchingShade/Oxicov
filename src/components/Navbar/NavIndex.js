import React, { useState } from 'react'
import {NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbar'
import Sidebar from './Sidebar'
import '../../commonCSS/Navbar.css'

function NavIndex() {
    const [vis,setVis]= useState(false);

    return (
     <>
     {console.log("this is state of vis "+vis)}
        <Nav >
            <NavLink to="/"><h1>Oxicov</h1></NavLink>
            <Bars onClick={()=>{setVis(vis?false:true)}}/>
            
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

        <Sidebar showClause={vis}/>
     </>
    )
}

export default NavIndex


