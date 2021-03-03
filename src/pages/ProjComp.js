import './ProjComp.css';

function ProjComp(props) {
    return (
        <div className="projectComponent">
            <h1 className="projName">{props.projName}</h1>
            <img className="projPic" src={props.picture}/>
            
            <p className="projDescription">{props.description}</p>
        </div>
    );
}

export default ProjComp;