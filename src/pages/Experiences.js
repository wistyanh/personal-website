import "./Experiences.css";
// import EE from "./../pics/eeIcon.png";
// import CS from "./../pics/csIcon1.png";
// import Teaching from "./../pics/teaching2.png";
// import Robotics from "./../pics/roboticsIcon.webp";
import timelineElements from "././Timeline/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

{/* @Source Claire Thibodeaux */}
function Experiences() {
    let iconBackground = {background: "#4ACAFC"};
    return (
        <div className="experiences">
            <h1 className="header">Experiences</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isEEIcon = element.icon == "ee";
                    let isCSIcon = element.icon == "cs";
                    let isRoboticsIcon = element.icon == "robotics";
                    

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={ iconBackground }
                            //icon={isCSIcon ? <img src={CS}/> : isEEIcon ? <img src={EE}/> : isRoboticsIcon ? <img src={Robotics}/> : <img src={Teaching}/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;