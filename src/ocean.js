import React from "react";
import Particles from "react-tsparticles";
import Transition from "./transition";
import "./ocean.scss";

const startColor = [25, 171, 222];

export default class Ocean extends React.Component {
    getGradient = (percent) => {
        return (
            "rgb(" + [startColor.map((color) => color * (1 - percent))] + ")"
        );
    };

    render = () => {
        console.log(this.getGradient(1));
        let background = this.getGradient(1);
        let lightOpacity = 1;

        return (
            <div className="ocean">
                <Transition animal="phytoplankton" x={10} y={100} size={200} />
                <Transition animal="seaturtle" x={10} y={200} size={200} />
                <Transition animal="dolphin" x={10} y={300} size={200} />
                <Transition animal="tigershark" x={10} y={400} size={200} />
                <Transition animal="giant_squid" x={10} y={500} size={200} />
                <Transition animal="octopus" x={10} y={600} size={200} />
                <Transition animal="bristlemouth" x={10} y={700} size={200} />
                <Transition animal="sperm_whale" x={10} y={800} size={200} />
                <Transition animal="blobfish" x={10} y={900} size={200} />
                <Transition animal="jellyfish" x={10} y={1000} size={200} />
                <Transition
                    animal="red_velvet_whale_fish"
                    x={10}
                    y={1100}
                    size={200}
                />
                <Transition
                    animal="humpback_angler_fish"
                    x={10}
                    y={1200}
                    size={200}
                />
                <Transition
                    animal="vulcanoctopus_hydrothermalis"
                    x={10}
                    y={1300}
                    size={200}
                />
                <Transition
                    animal="hydrothermal_vent"
                    x={10}
                    y={1400}
                    size={200}
                />
                <Particles
                    id="tsparticles"
                    options={{
                        background: { color: { value: background } },
                        particles: {
                            number: {
                                density: { enable: true, area: 3200 },
                                value: 800,
                            },
                            color: { value: "#ffffff" },
                            shape: { type: "circle" },
                            size: {
                                anim: { random: true },
                                value: 5,
                                random: true,
                            },
                            opacity: {
                                anim: { random: true },
                                value: 0.3,
                                random: true,
                            },
                            move: {
                                enable: true,
                                direction: "top",
                                random: true,
                                speed: 2,
                            },
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "bubble" },
                            },
                            detect_on: "window",
                            modes: {
                                bubble: {
                                    distance: 200,
                                    duration: 0,
                                    opacity: lightOpacity,
                                    size: 10,
                                },
                            },
                        },
                        fullScreen: {
                            zIndex: -1,
                        },
                    }}
                />
            </div>
        );
    };
}
