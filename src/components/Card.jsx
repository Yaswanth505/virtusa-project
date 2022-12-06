import React from "react";
import "../css/card.css";
function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="image"></img>
            <div className="content-info">
                <h3>{props.title}</h3>
                <p>{props.matter.substring(0, 100)}...</p>
            </div>
        </div>
    );
}
export default Card;
