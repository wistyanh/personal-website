import './App.css';
import HomePage from './pages/HomePage';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './pages/NavBar';
import TopBar from './pages/TopBar';
require('dotenv').config();

function App() {
  return (
    <div className="App">

      <TopBar/>
      <HomePage/>
      <Experiences/>
      <Projects/>
      <Contact/>

      {/* this works for going to a different page */}
      {/* <NavBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/experiences">
            <Experiences/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch> */}
      
      
    </div>
    
  );
}

export default App;
