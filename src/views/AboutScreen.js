import React from "react";

function AboutScreen() {
  return (
    <div>
      <div style={{backgroundColor:"#256ce1"}}> 
        <br></br>
        <br></br>
        <h1 className="centered" style={{color:"white"}}>About Oxicov</h1>
        <br></br>
        <div className="row" style={{ width: "100%", padding:"5%" }}>
          <div className="card">
            <div className="card-title centered">
              <h2>What is Oxicov?</h2>
            </div>
            <div className="card-body">
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus.
              <br></br>
              <br></br>
              Most people infected with the COVID-19 virus will experience mild
              to moderate respiratory illness and recover without requiring
              special treatment. Older people, and those with underlying medical
              problems like cardiovascular disease, diabetes, chronic
              respiratory disease, and cancer are more likely to develop serious
              illness.
              <br></br>
              <br></br>
              Oxicov is a Covid-19 Resource Sharing platform, where you can
              share your info about covid-19 resources such as oxygen cylinders,
              lunch facilities, medicines etc with others in the community and
              contribute towards saving a life!
            </div>
          </div>

          <div className="card" >
            <div className="card-title centered">
              <h2> How to contribute resources?</h2>
            </div>
            <div className="card-body">
              <p>
                Follow the following steps to start contributing your info and
                resources with Oxicov:
              </p>
              <ul style={{ width: "90%" }}>
                <li>Register yourself by signing up on the Oxicov Panel</li>
                <li>
                  On the Dashboard screen, fill in the information of the
                  Resource Provider for your city
                </li>
                <li>
                  Please make sure that you give all the contact info needed
                  when sharing the resources via the dashboard.
                </li>
                <li>
                  Within the description section of the dashboard, elaborate the
                  resource info and type in any necessary details that can be of
                  help to the patients
                </li>
                <li>
                  Click on the send button to send your resource info for
                  verification
                </li>
                <li>
                  Our team will receive your resource and verify that. Once
                  verified, the available resource would be listed under the
                  city searched from home screen
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-title centered">
              <h2> Contact us!</h2>
            </div>
            <div className="card-body">
              <p>
                For any information about anything on the website, or to
                contribute towards developing oxicov into a one stop solution
                for all your covid-19 resource info, contact us through the
                following channels
              </p>
              <ul style={{ width: "90%" }}>
                <li>Ankush Sharma</li>
                <li>Email: ankushors789@gmail.com</li>
                <li>
                  Github link to the project:{" "}
                  <a href="https://github.com/ScorchingShade/Oxicov">
                    https://github.com/ScorchingShade/Oxicov
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
