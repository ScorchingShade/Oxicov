import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import { Nav, useHistory } from "react-router-dom";
import Axios from "axios"

function Register(props) {
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
  const [signvalid, setSignvalid] = useState(true);

  const [userError, setUserError] = useState("Please Enter correct credentials");
  const [counter, setCounter] = useState(0);

  const onSubmitHandler = async (e) => {
    
    e.preventDefault();
    
    
    if (password !== confirmPass || phone === "" || password === "") {
      if(confirmPass===""){
        console.log("in confirmPass")
        setValid(false);
        setCounter(0)
      }
      
      
    } else {
      setValid(true);
      //  history.push("/home");
    }

    

    
      if(valid){
        const data = {
          phone: phone,
          pass: password,
          isAdmin: false,
        };
    
        try {
          const request = await Axios.post("api/v1/users/signup", data);
          localStorage.setItem("token", request.data.token);
          props.history.push("/authHome");
          setTimeout(()=>{
            window.location.reload(false)
          },200)
        } catch (e) {
          if(e.message!==undefined){
            if(e.message.includes("409")){
              setUserError("User already available, please log in!");
            }
          }
          
           
          setSignvalid(false);
        }
      }
    
   
   
  };

  const handleClick = () => {
    props.history.push("/login");
  };

  useEffect(() => {
    if (password !== confirmPass || phone === "" || password === ""||confirmPass==="") {
      
      setValid(false)
      setCounter(1)
      
    } 
  },[confirmPass, phone, password])

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

              <div style={valid|| counter===1? validFeed : invalidFeed}>
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

              <div style={valid||counter===1 ?  validFeed : invalidFeed}>
                Passwords must match!
              </div>


              <div style={signvalid ? validFeed : invalidFeed}>
                {userError}
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
