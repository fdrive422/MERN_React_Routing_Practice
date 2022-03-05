import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ColorText = (props) => {
    const navigate = useNavigate();
    const { param, color1, color2 } = useParams();
    const homePage = () => {
        navigate('/home');
    }

    return (
        <div>
            <button onClick={homePage}>Home</button>
            {
                isNaN(param) ?
                    <h1 style={{ color: color1, backgroundColor: color2 }}>The word is: {param}</h1>
                    : <h1 style={{ color: color1, backgroundColor: color2 }}>The number is: {param}</h1>
            }
            <Link to={'/hello/blue/pink'}> Colored Word? </Link>
            <br></br>
            <Link to={'/4/blue/pink'}> Colored Number? </Link>
        </div>
    )
}


export default ColorText;