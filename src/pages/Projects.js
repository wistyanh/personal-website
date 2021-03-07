import './Projects.css';
// import tgif from './../pics/tgif.jpg';
// import p5icon from './../pics/p5.png';
// import incomingicon from './../pics/incoming.png';
// import handgestures from './../pics/handgestures.png';
// import handgestures2 from './../pics/handgestures2.jpeg';
import ProjComp from './ProjComp.js';
import axios from 'axios';
import React from 'react';

function Projects() {

    const [projects, setProjects] = React.useState();

    async function fetchData() {
        const response = await axios.get("https://api.airtable.com/v0/appB2OLPmKbyJJCxa/Projects?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=asc", {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        });
        setProjects(response.data.records);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    if(!projects) {
        return <div>lol don't work</div>
    } 


    return (
        <div className="projects-page" id="projects">
            <div className="projtitle">Projects that I've worked on!</div>
                <div className="projs">

                    {projects.map((project) => (
                        <ProjComp key={project.id} info={project.fields}/>
                    ))}
                </div>
        </div>
    );
}



{/* <ProjComp 
                        picture = {tgif}
                        projName = "The Green Initiative Fund"
                        description = "ion know what we doin 🧍🏻‍♀️"

                    />
                    <ProjComp 
                        picture = {p5icon}
                        projName = "Skreem (p5)"
                        description = "utilized the p5 library to create a web-based game that takes the user’s audio input as player control."

                    />
                    <ProjComp 
                        picture = {incomingicon}
                        projName = "Incoming!"
                        description = "utilized swift, spatial audio, and erm vibration motors to aid visually and hearing impaired players in navigating through the space shooting game. primary programmer and worked with the hardware and audio teams to implement the external features. presented project at Blizzard Entertainment."

                    />
                    <ProjComp 
                        picture = {handgestures2}
                        projName = "Media Control via Gestures"
                        description = "programmed an Arduino board to detect motion via ultrasonic sensors and translate it to media controls like volume adjustment, play/pause, playback speed, etc."

                    /> */}

export default Projects;