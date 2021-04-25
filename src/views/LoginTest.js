import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Axios from "axios";
import { Redirect, Switch, BrowserRouter as Router } from "react-router-dom";

function LoginTest(props) {
  //states
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [authUser, setAuthUser] = useState();

  //css tags
  let invalidFeed = {
    display: "block",
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  };

  let validFeed = {
    display: "none",
  };

  //handlers
  const onSubmitHandler = async () => {
    //  e.preventDefault();
    console.log("In form " + phone + " " + password);

    //TODO: write condition to check request status of login here

    const data = {
      phone: phone,
      pass: password,
      isAdmin: false,
    };

    try {
      const request = await Axios.post("api/v1/users/signin", data);
      console.log("This is request" + JSON.stringify(request));
      localStorage.setItem("token", request.data.token);
      props.history.push("/authHome");
    } catch (e) {
      console.log("Here in error" + e);
      setValid(false);
    }
  };

  const handleClick = () => {
    props.history.push("/signup");
  };
  const redirectHandler = () => {
    props.history.push("/home")
    (setTimeout(() =>{
      
      window.location.reload(false);
    },200))
  
  };
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

                <div style={valid ? validFeed : invalidFeed}>
                  Invalid phone number or password!
                </div>
              </div>
              <div className="text-center">
                <MDBBtn color="indigo" onClick={() => onSubmitHandler()}>
                  Login
                </MDBBtn>
              </div>
              <div className="text-center">
                <p type="button" onClick={handleClick} className="text-center">
                  New here? Sign up!
                </p>
              </div>
            </form>
          </MDBCol>
        </div>
      </MDBContainer>
    );
  } else {
    return (
    
          <Redirect to={{pathname:"/authHome"}} />
   
    );
  }
}

export default LoginTest;
