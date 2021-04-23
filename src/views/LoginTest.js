import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import { Nav, useHistory } from "react-router-dom";

function LoginTest() {
    let history = useHistory();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = () => {
    //  e.preventDefault();
    console.log("In form " + phone + " " + password);
  };

  const handleClick = ()=>{
    history.push("/signup")
  }

  return (
    <MDBContainer>
      <br></br>
      <br></br>
      <h1 className="text-center">
        Want to share valuable info that can save a life?
      </h1>
      <br></br>
      <h3 className="text-center">
        Login here to submit your resource info for verification!
      </h3>
      <br></br>
      <br></br>
      <br></br>
   <div className="centered">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your Phone number"
                icon="phone"
                group
                type="phone"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setPhone(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="indigo" onClick={() => onSubmitHandler()}>
                Login
              </MDBBtn>
            </div>
            <div className="text-center">
            <p type="button" onClick={handleClick} className="text-center">New here? Sign up!</p>
              
            </div>
          </form>
        </MDBCol>
        </div>
    </MDBContainer>
  );
}

export default LoginTest;
