import React from "react";
import "./creature.scss";

export default class Creature extends React.Component {
    render = () => {
        const name = this.props.name;
        const left = this.props.x + "%";
        const top = this.props.y + "px";
        const height = this.props.size;

        return (
            <div
                className="creature"
                style={{
                    position: "absolute",
                    top: top,
                    left: left,
                    height: height,
                }}
            >
                <img src={`../assets/${name}.png `} height={height} />
            </div>
        );
    };
}
