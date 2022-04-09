import React from "react";
import "./transition.scss";

export default class Transition extends React.Component {
    render = () => {
        const animal = this.props.animal;

        return (
            <div className="transition">
                <img src={`../assets/${animal}.png`} alt="fail" />
            </div>
        );
    };
}
