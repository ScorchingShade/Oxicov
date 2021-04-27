import React, { useState, useEffect } from "react";
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar";
import Sidebar from "./Sidebar";
import "../../commonCSS/Navbar.css";

function NavIndex(props) {
  const [vis, setVis] = useState(false);

  let {authUser}=props

/*   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === {}) {
      setAuthUser(null);
    } else {
      console.log("Here is the token" + token);
      setAuthUser(token);
      console.log("Here is the token" + JSON.stringify(authUser));
    }
  }); */
  console.log("The Auth user prop is "+authUser)

  const logOutHandler=()=>{
    localStorage.removeItem("token");
    window.location.href = "/home"
    setTimeout(()=>{
      window.location.reload(false)
    },200)
  }

  useEffect(() => {
      if(!authUser){
          console.log("No auth user found")
      }else{
          authUser=props.authUser;
      }
  })

  if (!authUser) {
    return (
      <>
        {console.log("this is state of vis " + vis)}
        <Nav>
          <NavLink to="/">
            <h1>Oxicov</h1>
          </NavLink>
          <Bars
            onClick={() => {
              setVis(vis ? false : true);
            }}
          />

          <NavMenu>
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/login" activeStyle>
              Login
            </NavLink>

            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            {/* <NavBtnLink to="/register">Signup</NavBtnLink> */}
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signup">Signup</NavBtnLink>
          </NavBtn>
        </Nav>

        <Sidebar showClause={vis} />
      </>
    );
  } else {
    return (
      <>
        {console.log("this is state of vis " + vis)}
        <Nav>
          <NavLink to="/">
            <h1>Oxicov</h1>
          </NavLink>
          <Bars
            onClick={() => {
              setVis(vis ? false : true);
            }}
          />

          <NavMenu>
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/authHome" activeStyle>
              Dashboard
            </NavLink>

            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            {/* <NavBtnLink to="/register">Signup</NavBtnLink> */}
          </NavMenu>

          <NavBtn>
            {/* <NavBtnLink to="/logout">Logout</NavBtnLink> */}

            <button className="logoutbtn" onClick={()=>logOutHandler()}>Logout</button>
          </NavBtn>
        </Nav>

        <Sidebar showClause={vis} />
      </>
    );
  }
}

export default NavIndex;
