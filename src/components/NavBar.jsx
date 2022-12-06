import React from "react";
import "../css/navbar.css";
function Navbar(props) {
    return (
        <div className="navbar">
            <h1>Tripping</h1>
            <ul className="navList">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#mountains">Mountains</a>
                </li>
                <li>
                    <a href="#beaches">Beaches</a>
                </li>

                <li>
                    <a href="#restaurants">Restaurants</a>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;
