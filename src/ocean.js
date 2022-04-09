import React from "react";
import Transition from "./transition";
import "./ocean.scss";

export default class Ocean extends React.Component {
    render = () => {
        return (
            <div id="ocean">
                <Transition animal="dolphin" />
                {/* <Transition />
                <Transition />
                <Transition />
                <Transition />
                <Transition /> */}
            </div>
        );
    };
}
