import React, { useState } from "react";
import data from "../../data.js";
import homeStyle from "../../commonCSS/Homescreen.css";
function LocationDataTest(props) {
  const { location } = props;

  //    const [locationAvailable, setLocationAvailable]= useState(true);

  const splittedLoc = location.address.split(",");

  console.log("The location here in locationData is: " + splittedLoc[0]);

  const dataRenderer = () => {
    if (splittedLoc[0]) {
      return (
        <div className="centered">
        <div className="row">
          {data.dummyData.map((item) =>
            splittedLoc[0].toLowerCase() === item.city.toLowerCase() ? (
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
    } else {
      return <h3 className="text-center">Please enter some location...</h3>;
    }
  };

  return dataRenderer();
}

export default LocationDataTest;
