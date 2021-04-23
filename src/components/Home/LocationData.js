import React,{useState} from 'react'
import data from "../../data.js";
import homeStyle from "../../commonCSS/Homescreen.css"
function LocationData(props) {
    const {location}=props;

    const [locationAvailable, setLocationAvailable]= useState(true);

    const splittedLoc=location.address.split(",");

    console.log("The location here in locationData is: "+splittedLoc[0]);


    const dataRenderer=()=>{
      if(splittedLoc[0]){
       
        return (
        
        <div>
        <div className={homeStyle.row}>
          
        {data.dummyData.map((item) => (
            splittedLoc[0].toLowerCase()===item.city.toLowerCase()?
           
            <div key={item.id} className={homeStyle.card}>
              
            <div className={homeStyle.card-title}>
              <h3 className={homeStyle.textCenter}>{item.title}</h3>
            </div>
            <div className={homeStyle.card-body}>
                <p className={homeStyle.card-description}>{item.description}</p><br></br>
                <p className={homeStyle.card-info}>{item.contactInfo}</p>
            </div>
          </div>:
          <p></p>
          
        ))}
        
      </div>

      <br></br><p className={homeStyle.textCenter}>Didn't find data for your location? Don't worry we are adding new resources every day</p>
      </div>)
      }
      else{
       
        return (<h3 className={homeStyle.textCenter}>Please enter some location...</h3>)
      }
    }


    return (dataRenderer())
}

export default LocationData
