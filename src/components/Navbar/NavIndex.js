import React, { useState, useEffect } from "react";
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar";
import Sidebar from "./Sidebar";
import "../../commonCSS/Navbar.css";

function NavIndex(props) {
  const [vis, setVis] = useState(false);
  const [authUser, setAuthUser] = useState();

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (props.token === {}) {
        console.log("Navbar props are not available"+props.token);
      setAuthUser(null);
    } else {
        console.log("Navbar props are "+props.token);
      setAuthUser(token);
      console.log("Here is the navbar token" + JSON.stringify(authUser));
    }
  });

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
            <NavBtnLink to="/logout">Logout</NavBtnLink>
          </NavBtn>
        </Nav>

        <Sidebar showClause={vis} />
      </>
    );
  }
}

export default NavIndex;
