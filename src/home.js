import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

require("../assets/home.png");

export default class Home extends React.Component {
    // componentDidMount = () => {
    //     document.addEventListener("keydown", this.handleKeyPress, false);
    // }

    render = () => {
        return (
            <div id="home-container">
                <img id="background" src={`../assets/home.png`} />
                <p id="center-text">95% of the Ocean is Unexplored ...</p>
                <Link to="/ocean" id="start-button" className="btn btn-primary">
                    Click to Start
                </Link>
            </div>
        );
    };
}
