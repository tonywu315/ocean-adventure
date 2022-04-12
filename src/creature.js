import React from "react";
import { data } from "./data";
import "./creature.scss";

export default class Creature extends React.Component {
    state = {
        caption: false,
    };

    render = () => {
        const name = this.props.name;
        const left = this.props.x + "%";
        const top = this.props.y + "px";
        const height = this.props.size + "px";

        let caption = <></>;
        if (this.state.caption && !this.props.nocaption) {
            const creature = data[name];

            if (creature != undefined) {
                const text = creature.info
                    .split("\n")
                    .map((str) => <p key={str}>{str}</p>);
                const captionLeft = this.props.captionX + "px";
                const captionTop = this.props.captionY + "px";
                caption = (
                    <div
                        className="caption"
                        style={{ top: captionTop, left: captionLeft }}
                    >
                        <span className="caption-name">{creature.name}</span>
                        {text}
                    </div>
                );
            }
        }
        console.log(this.state.caption);

        return (
            <div className="creature" style={{ top, left }}>
                {caption}
                <img
                    src={`../assets/${name}.png `}
                    height={height}
                    draggable={false}
                    onMouseEnter={() => this.setState({ caption: true })}
                    onMouseLeave={() => this.setState({ caption: false })}
                />
            </div>
        );
    };
}
