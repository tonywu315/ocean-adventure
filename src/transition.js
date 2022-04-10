import React from "react";
import "./transition.scss";

export default class Transition extends React.Component {
    render = () => {
        const animal = this.props.animal;
        const left = this.props.x;
        const top = this.props.y;
        const height = this.props.size;

        return (
            <div className="transition" style={{position: "absolute", top: top, left: left, height: height}}>
                <img className="abcd" src={`../assets/${animal}.png `} alt="fail" height={height} />
            </div>
        );
    };
}

