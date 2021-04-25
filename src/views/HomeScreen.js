import React, { useEffect, useState } from "react";
import "../commonCSS/Homescreen.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import search from "../images/search.png";


import LocationDataTest from "../components/Home/LocationDataTest";

function HomeScreen(props) {
  const [address, setAddress] = useState({ address: "" });
  const searchLogo = search;

  const handleChange = (address) => {
    console.log("Entered+" + JSON.stringify(address));
    setAddress({ address });
  };

  const handleSelect = (address, placeId, suggestion) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setAddress({ address }))
      //.then(latLng => console.log('Success', latLng))
      .catch((error) => console.error("Error", error));
  };

  useEffect(()=>{
    console.log("Here in home"+JSON.stringify(props))
    /* if(props.location){
      window.location.reload();
    } */
  })

  return (
    <div>
      <br></br>
      <br></br>
      <h1 className="text-center">Welcome to the Covid Resources Panel</h1>

      <br></br>
      <h3 className="text-center">
        Search your city here to view the covid resources available
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <div className="centered">
        <PlacesAutocomplete
          value={address.address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <div id="input_container">
                <input
                  {...getInputProps({
                    placeholder: "Search Covid Resources for your city ...",
                    className: "location-search-input",
                    autofocus: true,
                  })}
                  id="input"
                />
                <img src={searchLogo} alt="search" id="input_img"></img>
              </div>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      className="input-suggestion"
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      <i className="material-icons">location_on</i>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <br></br>
      <LocationDataTest location={address}/>
    </div>
  );
}

export default HomeScreen;
