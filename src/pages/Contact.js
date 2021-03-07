import './Contact.css';
import me2 from './../pics/me2.jpg';
import email from './../pics/email.png';
import github from './../pics/github.png';
import linkedin from './../pics/li.png';
import resume from './../pics/resume.png';
import resumePDF from './../pics/AnhPhamResume.pdf'


function Contact() {
  return (

    <div className="contact" id="contact">

        <div className="leftSide">
            <h1 className="reach-out">reach out and let's chat!</h1>

            <div className="socials">
                <a href="mailto:wistyanh12@gmail.com" target="_blank">
                    <img className="icons" src={email}/>
                </a>
                <a href="https://github.com/wistyanh" target="_blank">
                    <img className="icons" src={github}/>
                </a>
                <a href="https://www.linkedin.com/in/anhvpham/" target="_blank">
                    <img className="icons" src={linkedin}/>
                </a>
                <a href={resumePDF} target="_blank">
                    <img className="icons" src={resume}/>
                </a>
                
                
                
            </div>

        </div>

        <div className="rightSide">
            <img className="me2" src={me2}/>
        </div>

    </div>

    );
}

export default Contact;