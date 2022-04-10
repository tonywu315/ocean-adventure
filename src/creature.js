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
        const height = this.props.size;

        let caption = <></>;
        if (this.state.caption) {
            const creature = data[name];

            if (creature != undefined) {
                const text = creature.info
                    .split("\n")
                    .map((str) => <p key={str}>{str}</p>);
                caption = (
                    <div className="caption">
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
                    onMouseEnter={() => this.setState({ caption: true })}
                    onMouseLeave={() => this.setState({ caption: false })}
                />
            </div>
        );
    };
}
