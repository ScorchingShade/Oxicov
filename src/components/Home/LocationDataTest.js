import React, { useState,useEffect } from "react";
import data from "../../data.js";
import homeStyle from "../../commonCSS/Homescreen.css";
import axios from 'axios';

function LocationDataTest(props) {
  const { location } = props;
  const [requestData, setRequestData]=useState({});

  //    const [locationAvailable, setLocationAvailable]= useState(true);

  const splittedLoc = location.address.split(",");

  console.log("The location here in locationData is: " + splittedLoc[0]);

  useEffect( () => {
   (async () =>{
    try{
      const request= await axios.request('/api/v1/resources/getResource');
    
      setRequestData(request);
      console.log("Entire resource set here: "+JSON.stringify(request.data));
    }
    catch(e){
      console.log("Location Error");
    }
   })()
   
    
    
    
    /* return () => {
      setRequestData({})
    } */
   
  },[])

 


  const dataRenderer = () => {
    if (splittedLoc[0]) {
      if(requestData!={}){
        return (
          <div className="centered">
          <div className="row">
            {requestData.data.map((item) =>
              splittedLoc[0].toLowerCase() === item.city.toLowerCase() && item.verified? (
                <div key={item.id} className="card">
                  <div className="card-title">
                    <h3 className="text-center">{item.title}</h3>
                  </div>
                  <div className="card-body">
                    <p className="card-description">{item.description}</p>
                    <br></br>
                    <p className="card-info">{item.contactInfo}</p>
                  </div>
                </div>
              ) : (
                <p></p>
              )
            )}
            </div>
            <p className="text-center">
              Didn't find data for your location? Don't worry we are adding new
              resources every day
            </p>
          
          </div>
        );
      }
      else{
       return( <p className="text-center">
       Didn't find data for your location? Don't worry we are adding new
       resources every day
     </p>)
      }
     
    } else {
      return <h3 className="text-center">Please enter some location...</h3>;
    }
  };

  return dataRenderer();
}

export default LocationDataTest;
