import {useNavigate} from "react-router-dom";
import leftArrow from "../images/arrowL.png";
import rightArrow from "../images/arrowR.png";
import "../styles/arrow.css";

function Arrow(props: { pathUrl: string, isRight?: boolean }) {
    const navigate = useNavigate();
    return <img className="arrow" src={props.isRight ? rightArrow : leftArrow}
                alt={props.isRight ? "rightArrow" : "leftArrow"}
                onClick={() => navigate(props.pathUrl)}/>;
}

export default Arrow