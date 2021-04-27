import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px   ",
      boxShadow: "5px 5px black",
      padding: theme.spacing(7, 7, 5),
    },
  }));

function AuthUserScreen(props) {

   
      const classes = useStyles();


  const [userAuth, setUserAuth] = useState({});
  const [authUser, setAuthUser] = useState();
  const [modalText, setModalText] = useState("Resource sent for verification, click anywhere to exit!")


  //Form states
  const [title, setTitle]=useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [verified, setVerified] = useState(false);
  



  const [open, setOpen] = useState(false);

  const resetState=()=>{
    setState("");setCity("");setTitle("");setDescription("");setContactInfo("");
  }

  const handleOpen = async () => {
      const data={
          title:title,
          description:description,
          contactInfo:contactInfo,
          city:city,
          state:state,
          verified:verified
    }
   // console.log("Showing Entered Data  +++++++++++++++  "+JSON.stringify(data))

    try{

        const request = await Axios.post("api/v1/resources/create", data);
        setModalText("Resource sent for verification, click anywhere to exit!");
    } catch(e){
        //console.log("Error sending forms data "+e)
        setModalText("Error occurred "+e.message)
    }
    

    
    
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };


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
    return (
      <div style={{ background: "#256ce1", height: "auto" }}>
        <br></br>
        <br></br>
        <h1 className="text-center" style={{ color: "#fff" }}>
          Create a new Resource Addition Request Here!
        </h1>
        <br></br>
        <div className="centered" style={{ width: "100%" }}>
          <div className="row" style={{width:"100%"}}>
            <div
              className="card"
              style={{ padding: "5%", boxShadow: "5px 10px black" }}
            >
              <div className="card-title">
                <h3 className="text-center" style={{ fontWeight: "bold" }}>
                  Send us your resources for verification here!
                </h3>
              </div>
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ecedf0 ",
                  boxShadow: "5px 10px #888888",
                }}
              >
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-full-width"
                    label="Enter Provider"
                    style={{ margin: 8 }}
                    fullWidth
                    helperText="Resource provider (e.g Oxicov gas Agency)"
                    variant="outlined"
                    onChange={(e) =>setTitle(e.target.value)}
                  />
                  <TextField
                    id="outlined-full-width"
                    label="Enter City"
                    style={{ margin: 8 }}
                    fullWidth
                    helperText="Resource provider city (e.g Delhi)"
                    variant="outlined"
                    onChange={(e) =>setCity(e.target.value)}
                  />
                  <TextField
                    id="outlined-full-width"
                    label="Enter State"
                    style={{ margin: 8 }}
                    fullWidth
                    helperText="Resource provider State, please avoid abbreviations (e.g Madhya Pradesh)"
                    variant="outlined"
                    onChange={(e) =>setState(e.target.value)}
                  />
                  <TextField
                    id="outlined-full-width"
                    label="Enter Description"
                    style={{ margin: 8 }}
                    fullWidth
                    helperText="Resource description (e.g Oxygen cylinders available for Sector 2 Indore)"
                    variant="outlined"
                    onChange={(e) =>setDescription(e.target.value)}
                  />
                  <TextField
                    id="outlined-full-width"
                    label="Enter Contact number"
                    style={{ margin: 8 }}
                    fullWidth
                    helperText="Resource provider Contact info, please verify before entering (e.g +919990613392)"
                    variant="outlined"
                    onChange={(e) =>setContactInfo(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                  <div className="centered">
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<Icon>send</Icon>}
                      onClick={handleOpen}
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Thank you for your support</h2>
              <p id="transition-modal-description">
                {modalText}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default AuthUserScreen;
