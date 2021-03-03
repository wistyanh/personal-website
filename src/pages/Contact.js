import './Contact.css';
import me2 from './../pics/me2.jpg';
import email from './../pics/email.png';
import github from './../pics/github.png';
import linkeidn from './../pics/li.png';
import resume from './../pics/resume.png';


function Contact() {
  return (

    <div className="contact">

        <div className="leftSide">
            <h1 className="reach-out">reach out and let's chat!</h1>

            <div className="socials">
                <img className="icons" src={email}/>
                <img className="icons" src={github}/>
                <img className="icons" src={linkeidn}/>
                <img className="icons" src={resume}/>
            </div>

        </div>

        <div className="rightSide">
            <img className="me2" src={me2}/>
        </div>

    </div>

    );
}

export default Contact;