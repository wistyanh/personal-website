import './HomePage.css';
import me1 from './../pics/me1.JPG';
import axios from 'axios';
import React from 'react';
require('dotenv').config();


function HomePage() {

  const [homeBio, setHomeBio] = React.useState();

    async function fetchData() {
        const response = await axios.get("https://api.airtable.com/v0/appB2OLPmKbyJJCxa/Homepage", {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        });
        setHomeBio(response.data.records);
    }

  React.useEffect(() => {
    fetchData();
  }, []);

  if(!homeBio) {
    return <div>lol don't work</div>
  } 
  
  return (
    <div className="HomePage" id="about">

      {/* <div className="topBar">

        <div className="AVP">
          <h2 className="initial">AVP</h2>
        </div>
        
        <div className="NavBar">

          <ul>
            <li>about me</li>
            <li>experiences</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>

      </div> */}
      
      <div className="infopage">

        <div className="left-side">
          <h1>anh pham</h1>
          <div className="info">
            {homeBio[0].fields.Bio}
          </div>
        </div>

        <div className="right-side">
          <img className="me1" src={me1}/>
        </div>
      </div>

      <div className="contact">

      </div>

    </div>
  );
}

export default HomePage;






{/* Faulty NavBar Implementation
import './HomePage.css';
import me1 from './../pics/me1.JPG'
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Experiences from './Experiences.js';
import Projects from './Projects.js';
import Contact from './Contact.js';



function HomePage() {
  return (
    <div className="HomePage">

      <div className="topBar">

        <div className="AVP">
          <h2 className="initial">AVP</h2>
        </div>
        
        <Router>
          <div className="NavBar">
            <nav>
              <ul>
                <li>
                  <Link to="/">about me</Link>
                </li>
                <li>
                  <Link to="/experiences">experiences</Link>
                </li>
                <li>
                  <Link to="/projects">projects</Link>
                </li>
                <li>
                  <Link to="/contact">contacts</Link>
                </li>
              </ul>
            </nav>

            <Switch>
            <Route path="/about">
              <HomePage />
            </Route>
            <Route path="/experiences">
              <Experiences />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>

        </div>
      </Router>


        

      </div>
      
      <div className="infopage">

        <div className="left-side">
          <h1>anh pham</h1>
          <p className="info">
            hi there! i’m a first-year student studying electrical engineering
            and computer science at UC Berkeley.  i’m interested in utilizing
            technology for social good and to create biomedical technology. 
            i am currently a mentored developer at Codebase and an will be 
            working as a electrical engineering intern at T-Mobile this upcoming summer.
          </p>
        </div>

        <div className="right-side">
          <img className="me1" src={me1}/>
        </div>
      </div>

      <div className="contact">

      </div>

    </div>
  );
}

export default HomePage;

*/}