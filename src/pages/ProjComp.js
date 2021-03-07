import './ProjComp.css';
import React from "react";

function ProjComp( props ) {
    return (
        <div className="projectComponent">
            <h1 className="projName">{props.info.Name}</h1>
            <img className="projPic" src={props.info.Icon[0].url}/>
            
            <p className="projDescription">{props.info.Description}</p>
        </div>
    );
}

export default ProjComp;