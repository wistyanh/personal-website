import "./Experiences.css";
// import EE from "./../pics/eeIcon.png";
// import CS from "./../pics/csIcon1.png";
// import Teaching from "./../pics/teaching2.png";
// import Robotics from "./../pics/roboticsIcon.webp";
// import timelineElements from "././Timeline/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from 'axios';
import React from 'react';

{/* @Source Claire Thibodeaux */}
function Experiences() {
    let iconBackground = {background: "#4ACAFC"};

    const [exp, setExp] = React.useState();

    async function fetchData() {
        const response = await axios.get("https://api.airtable.com/v0/appB2OLPmKbyJJCxa/Experiences?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=asc", {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        });
        setExp(response.data.records);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    if(!exp) {
        return <div>lol don't work</div>
    } 

    return (
        <div className="experiences" id="experiences">
            <h1 className="header">Experiences</h1>
            <VerticalTimeline>
                {exp.map((element) => {
                    // let isEEIcon = element.icon == "ee";
                    // let isCSIcon = element.icon == "cs";
                    // let isRoboticsIcon = element.icon == "robotics";
                    

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.fields.Date}
                            dateClassName="date"
                            iconStyle={ iconBackground }
                            //icon={isCSIcon ? <img src={CS}/> : isEEIcon ? <img src={EE}/> : isRoboticsIcon ? <img src={Robotics}/> : <img src={Teaching}/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.fields.Title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.fields.Location}
                            </h5>
                            <p id="description">{element.fields.Description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;