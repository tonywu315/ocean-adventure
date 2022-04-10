import React from "react";
import Particles from "react-tsparticles";
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
                <p id="introduction">
                    Scroll down to explore. Hover over each image for more
                    information.
                </p>
                <p id="sunlight">
                    The sunlight layer is the only layer of the ocean which
                    receives sunlight meaning it is the only layer where
                    photosynthesis may occur. Most photosynthesis is performed
                    by microscopic phytoplankton. When the ocean floor is
                    shallow you also find seaweed and algae growing on it. This
                    relative abundanceo of energy means most of the life in the
                    ocean lives in this small layer including sharks, sea
                    turtles, and most fish that we eat.
                </p>
                <p id="twilight">
                    There is very little visible light in the twilight layer
                    meaning animals in it must survive either by hunting in
                    shallower waters or consuming particles which drift down
                    from above. The water temperature decreases dramatically in
                    this layer from around 20° celsius to around 5° celsius. Due
                    to the lack of light many creatures develop bioluminescence
                    which allows them to create their own light using chemical
                    reactions. Animals that live here include the giant squid,
                    sperm whale, and octopus
                </p>
                <p id="midnight">
                    The midnight layer's name comes from the complete lack of
                    light that penetrates into it. To adapt to the lack of light
                    and nutrients in this layer many of the organisms in it do
                    not have eyes, have weak muscles, and/or metabolize slowly.
                    Many of the organisms here survive off of deep sea vents as
                    they are one of the few sources of nutrients on the ocean
                    floor. Examples of animals which live here include
                    anglerfish, whalefish, and jellyfish.
                </p>

                <Creature
                    name="phytoplankton"
                    x={50}
                    y={1100}
                    size={150}
                    captionX={-160}
                    captionY={-180}
                />
                <Creature
                    name="seaturtle"
                    x={76}
                    y={1250}
                    size={120}
                    captionX={-150}
                    captionY={-290}
                />
                <Creature
                    name="dolphin"
                    x={10}
                    y={1200}
                    size={180}
                    captionX={-36}
                    captionY={-300}
                />
                <Creature
                    name="bluefin_tuna"
                    x={40}
                    y={1400}
                    size={160}
                    captionX={-60}
                    captionY={-250}
                />
                <Creature
                    name="school_of_fish"
                    x={65}
                    y={1600}
                    size={150}
                    captionX={-85}
                    captionY={-165}
                />
                <Creature
                    name="tigershark"
                    x={5}
                    y={1800}
                    size={180}
                    captionX={0}
                    captionY={-350}
                />
                <Creature
                    name="octopus"
                    x={40}
                    y={2650}
                    size={400}
                    captionX={-450}
                    captionY={16}
                />
                <Creature
                    name="bristlemouth"
                    x={20}
                    y={3200}
                    size={100}
                    captionX={-32}
                    captionY={-290}
                />
                <Creature
                    name="sperm_whale"
                    x={16}
                    y={3800}
                    size={450}
                    captionX={175}
                    captionY={-330}
                />
                <Creature
                    name="giant_squid"
                    x={7}
                    y={4300}
                    size={375}
                    captionX={650}
                    captionY={-315}
                />
                <Creature
                    name="blobfish"
                    x={20}
                    y={5000}
                    size={200}
                    captionX={200}
                    captionY={-36}
                />
                <Creature
                    name="jellyfish"
                    x={20}
                    y={5800}
                    size={800}
                    captionX={450}
                    captionY={240}
                />
                <Creature
                    name="red_velvet_whale_fish"
                    x={50}
                    y={7800}
                    size={60}
                    captionX={-480}
                    captionY={-135}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={15}
                    y={8800}
                    size={250}
                    captionX={415}
                    captionY={-40}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={25}
                    y={8850}
                    size={40}
                    nocaption
                />
                <Creature
                    name="hydrothermal_vent"
                    x={5}
                    y={9497}
                    size={500}
                    captionX={380}
                    captionY={0}
                />
                <Creature
                    name="vulcanoctopus_hydrothermalis"
                    x={8}
                    y={9657}
                    size={200}
                    captionX={380}
                    captionY={-30}
                />
                <Creature
                    name="plastic_bag"
                    x={80}
                    y={9700}
                    size={100}
                    captionX={0}
                    captionY={-400}
                />
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
