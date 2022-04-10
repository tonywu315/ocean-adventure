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
                <Transition animal="phytoplankton" x={750} y={300} size={150} />
                <Transition animal="seaturtle" x={1400} y={400} size={200} />
                <Transition animal="dolphin" x={300} y={375} size={200} />
		    <Transition animal="bluefin_tuna" x={650} y={500} size={200} />
		    <Transition animal="school_of_fish" x={1100} y={675} size={200} />
                <Transition animal="tigershark" x={10} y={750} size={200} />
                <Transition animal="giant_squid" x={100} y={1500} size={200} />
                <Transition animal="octopus" x={1250} y={1800} size={225} />
                <Transition animal="bristlemouth" x={750} y={2250} size={150} />
                <Transition animal="sperm_whale" x={250} y={3000} size={400} />
                <Transition animal="blobfish" x={1250} y={4000} size={200} />
                <Transition animal="jellyfish" x={250} y={5000} size={200} />
                <Transition
                    animal="red_velvet_whale_fish"
                    x={1000}
                    y={6000}
                    size={100}
                />
                <Transition
                    animal="humpback_angler_fish"
                    x={750}
                    y={8000}
                    size={200}
                />
			<Transition
                    animal="hydrothermal_vent"
                    x={70}
                    y={10000}
                    size={500}
                />
                <Transition
                    animal="vulcanoctopus_hydrothermalis"
                    x={200}
                    y={10250}
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
