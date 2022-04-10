import React from "react";
import "./transition.scss";

export default class Transition extends React.Component {
    render = () => {
        const animal = this.props.animal;
        const left = this.props.x + "px";
        const top = this.props.y + "px";
        const height = this.props.size;

        return (
            <div
                className="transition"
                style={{
                    position: "absolute",
                    top: top,
                    left: left,
                    height: height,
                }}
            >
                <img src={`../assets/${animal}.png `} height={height} />
            </div>
        );
    };
}
