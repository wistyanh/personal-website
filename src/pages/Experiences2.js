import './Experiences2.css';
import tgif from './../pics/tgif.jpg'
import p5icon from './../pics/p5.png'
import incomingicon from './../pics/incoming.png'
import handgestures from './../pics/handgestures.png'

function Projects() {
    return (

        <div className="experiences">

            <div className="projtitle">Projects that I've worked on!</div>

            <div className="TGIF">
                <div className="TGIFIcon">
                    <img className="tgif" src={tgif}/>
                </div>
                <div className="TGIFDescription">
                    <h1 className="projectName">TGIF</h1>
                    <p className="description">
                        ion know what we doin 🧍🏻‍♀️
                    </p>
                </div>
            </div>

            <div className="p5">
                <div className="p5Icon">
                    <div className="p5Icon">
                        <img className="p5icon" src={p5icon}/>
                    </div>
                </div>
                <div className="p5Description">
                    <h1 className="projectName">Skreem (p5)</h1>
                    <p className="description">
                        utilized the p5 library to create a web-based game that takes
                         the user’s audio input as player control.
                    </p>
                </div>
            </div>
            <div className="Incoming">
                <div className="IncomingIcon">
                    <div className="incoming">
                        <img className="incomingicon" src={incomingicon}/>
                    </div>
                </div>
                <div className="IncomingDescription">
                    <h1 className="projectName">Incoming!</h1>
                    <p className="description">
                        utilized swift, spatial audio, and erm vibration motors to aid 
                        visually and hearing impaired players in navigating through the 
                        space shooting game. primary programmer and worked with the hardware 
                        and audio teams to implement the external features. presented project 
                        at Blizzard Entertainment.
                    </p>
                </div>
            </div>
            <div className="Media-Controls">
                <div className="Media-ControlIcon">
                    <div className="mediapic">
                        <img className="handgestures" src={handgestures}/>
                    </div>
                </div>
                <div className="Media-ControlDescription">
                    <h1 className="projectName">Media Control Gestures</h1>
                    <p className="description">
                        programmed an Arduino board to detect motion via ultrasonic sensors 
                        and translate it to media controls like volume adjustment, play/pause, 
                        playback speed, etc.
                    </p>
                </div>  
            </div>  

        </div>

    );
}

export default Projects;