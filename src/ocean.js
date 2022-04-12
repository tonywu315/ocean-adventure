import React from "react";
import Particles from "react-tsparticles";
import Wave from "react-wavify";
import Creature from "./creature";
import "./ocean.scss";

const startColor = [25, 171, 222];

export default class Ocean extends React.Component {
    scrollRef = React.createRef();

    state = {
        scroll: 0,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    getGradient = (percent) => {
        return (
            "rgb(" +
            [startColor.map((color) => color * Math.pow(1 - percent, 3))] +
            ")"
        );
    };

    onScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scroll = winScroll / height;

        if (Math.abs(this.state.scroll - scroll) > 0.01) {
            this.setState({ scroll });
        }
    };

    render = () => {
        let backgroundColor = this.getGradient(this.state.scroll);
        let lightOpacity = this.state.scroll;

        return (
            <div className="ocean">
                <p id="introduction" className="ocean-text">
                    Scroll down to explore the ocean! <br /> Hover over
                    creatures for more information.
                </p>
                <div id="sunlight" className="ocean-text">
                    <p className="ocean-header">The Sunlight Layer</p>
                    In the only layer that receives sunlight, photosynthesis by
                    phytoplankton and algae provide an abundance of energy. Most
                    of the life in the ocean lives here!
                </div>
                <div id="twilight" className="ocean-text">
                    <p className="ocean-header">The Twilight Layer</p>
                    <p>
                        Organisms here must survive either by hunting in
                        shallower waters or consuming particles which drift down
                        from above. Due to the lack of light, many creatures
                        develop bioluminescence!
                    </p>
                </div>
                <div id="midnight" className="ocean-text">
                    <p className="ocean-header">The Midnight Layer</p>
                    <p>
                        To adapt to the lack of light and nutrients, many
                        organisms do not have eyes, have weak muscles, and/or
                        metabolize slowly. Deep sea vents are one of the few
                        sources of nutrients here.
                    </p>
                </div>
                <div id="pollution" className="ocean-text">
                    Uh-oh! Even in the deepest of places, pollution permeates.
                </div>

                <Creature
                    name="phytoplankton"
                    x={50}
                    y={1350}
                    size={150}
                    captionX={-160}
                    captionY={-180}
                />
                <Creature
                    name="seaturtle"
                    x={76}
                    y={1500}
                    size={120}
                    captionX={-150}
                    captionY={-290}
                />
                <Creature
                    name="dolphin"
                    x={10}
                    y={1450}
                    size={180}
                    captionX={-36}
                    captionY={-300}
                />
                <Creature
                    name="bluefin_tuna"
                    x={40}
                    y={1650}
                    size={160}
                    captionX={-60}
                    captionY={-250}
                />
                <Creature
                    name="school_of_fish"
                    x={65}
                    y={1850}
                    size={150}
                    captionX={-85}
                    captionY={-165}
                />
                <Creature
                    name="tigershark"
                    x={5}
                    y={1950}
                    size={180}
                    captionX={0}
                    captionY={-350}
                />
                <Creature
                    name="octopus"
                    x={40}
                    y={2850}
                    size={400}
                    captionX={-450}
                    captionY={16}
                />
                <Creature
                    name="bristlemouth"
                    x={20}
                    y={3400}
                    size={100}
                    captionX={380}
                    captionY={-90}
                />
                <Creature
                    name="sperm_whale"
                    x={16}
                    y={3950}
                    size={450}
                    captionX={175}
                    captionY={-330}
                />
                <Creature
                    name="giant_squid"
                    x={7}
                    y={4450}
                    size={375}
                    captionX={650}
                    captionY={-315}
                />
                <Creature
                    name="blobfish"
                    x={20}
                    y={5150}
                    size={200}
                    captionX={200}
                    captionY={-36}
                />
                <Creature
                    name="jellyfish"
                    x={20}
                    y={6100}
                    size={800}
                    captionX={450}
                    captionY={240}
                />
                <Creature
                    name="red_velvet_whale_fish"
                    x={50}
                    y={7950}
                    size={60}
                    captionX={-480}
                    captionY={-135}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={15}
                    y={8950}
                    size={250}
                    captionX={415}
                    captionY={-40}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={25}
                    y={9000}
                    size={40}
                    nocaption
                />
                <Creature
                    name="hydrothermal_vent"
                    x={5}
                    y={9647}
                    size={500}
                    captionX={380}
                    captionY={0}
                />
                <Creature
                    name="vulcanoctopus_hydrothermalis"
                    x={8}
                    y={9807}
                    size={200}
                    captionX={380}
                    captionY={-30}
                />
                <Creature
                    name="plastic_bag"
                    x={80}
                    y={9850}
                    size={100}
                    captionX={0}
                    captionY={-400}
                />
                <div id="wave-container">
                    <div></div>
                    <Wave
                        id="wave"
                        fill="url(#gradient)"
                        options={{
                            height: 40,
                            amplitude: 30,
                            speed: 0.15,
                            points: 5,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id="gradient"
                                gradientTransform="rotate(90)"
                            >
                                <stop offset="10%" stopColor="#B8DDF0" />
                                <stop
                                    offset="90%"
                                    stopColor={backgroundColor}
                                />
                            </linearGradient>
                        </defs>
                    </Wave>
                </div>

                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: { value: "#333333" },
                            opacity: 0,
                        },
                        particles: {
                            number: {
                                density: { enable: true, area: 3200 },
                                value: 800,
                            },
                            color: { value: "#ffffff", opacity: 0 },
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
                            zIndex: 1,
                        },
                    }}
                />
                <div id="background" style={{ backgroundColor }}></div>
            </div>
        );
    };
}
