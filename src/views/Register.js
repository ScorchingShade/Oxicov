import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import { Nav, useHistory } from "react-router-dom";

function Register() {
  // let history = useHistory();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  let invalidFeed = {
    display: "block",
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  };

  let validFeed = {
    display: "none",
  };

  const [valid, setValid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("In form " + phone + " " + password);

    password != confirmPass || phone === "" ? setValid(false) : setValid(true);

    if (password !== confirmPass || phone === "" || password === "") {
      setValid(false);
    } else {
      setValid(true);
      //  history.push("/home");
    }
  };

  const handleClick = () => {
    // history.push("/login");
  };

  return (
    <MDBContainer>
      <br></br>
      <br></br>
      <h1 className="text-center">Contribute your part in saving lives!</h1>
      <br></br>
      <h3 className="text-center">
        Sign up here to submit your resource info for verification!
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <div className="centered">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
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

              <div style={valid ? validFeed : invalidFeed}>
                Please enter a valid Contact number!
              </div>

              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBInput
                label="Confirm your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(e) => setConfirmPass(e.target.value)}
              />

              <div style={valid ? validFeed : invalidFeed}>
                Passwords must match!
              </div>
            </div>

            <div className="text-center">
              <MDBBtn color="indigo" onClick={(e) => onSubmitHandler(e)}>
                Signup
              </MDBBtn>
            </div>
            <div className="text-center">
              <p type="button" onClick={handleClick} className="text-center">
                Already a user? Sign in here!
              </p>
            </div>
          </form>
        </MDBCol>
      </div>
    </MDBContainer>
  );
}

export default Register;
