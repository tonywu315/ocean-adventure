import React from "react";
import Particles from "react-tsparticles";
import Transition from "./transition";
import "./ocean.scss";

export default class Ocean extends React.Component {
    render = () => {
        let background = "#0d47a1";
        let lightOpacity = 1;
        // background = "#000000";

        return (
            <div className="ocean">
		    <Transition animal="phytoplankton" />
		    <Transition animal="school_of_fish"/>
 	          <Transition animal="school_of_fish2"/>
 <Transition animal="seaturtle"/>
	          <Transition animal="dolphin" />
 <Transition animal="tigershark"/>
 <Transition animal="correct_giant_squid"/> 
 <Transition animal="octopus"/>
 <Transition animal="bristlemouth"/>
<Transition animal="sperm_whale"/>
<Transition animal="blobfish"/>
<Transition animal="jellyfish"/>
<Transition animal="red_velvet_whale_fish"/>
<Transition animal="humpback_angler_fish"/>
<Transition animal="vulcanoctopus_hydrothermalis"/>
<Transition animal="hydrothermal_vent"/>

                {/* <Transition />
                <Transition />
                <Transition />
                <Transition />
                <Transition /> */}
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
                        }
                    }}
                />
            </div>
        );
    };
}
