import './HomePage.css';
import me1 from './../pics/me1.JPG'


function HomePage() {
  return (
    <div className="HomePage">

      <div className="topBar">

        {/* <h2 className="initial">AVP</h2> */}

        <div className="NavBar">
          <ul>
            <li>about me</li>
            <li>experiences</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>

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
