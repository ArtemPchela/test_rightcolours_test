import React, { Component } from "react";
import Baloon from "./Baloon/baloon";

const helloStrings = [
    "hello,",
    "bonjour,",
    "hoi,",
    "dag,",
    "hallo,",
    "namaste,",
    "привет,",
    "hola,",
    "olá,",
    "shalóm,",
    "ciao,",
    "yassas,"
];

function calcTransform(x, y) {
    // const percent = x / window.innerWidth;
    return {
        translate: {
            transX: x / 25,
            transY: y / 25
        },
        changeColor: {
            red: 0,
            green: 0,
            blue: 0
        },
        scale: 0.1
    };
}

function calcTransform1(x, y) {
    const percent = x / window.innerWidth;
    return {
        translate: {
            transX: x / 25,
            transY: y / 25
        },
        changeColor: {
            red: Math.round(-24 * percent),
            green: Math.round(-12 * percent),
            blue: Math.round(48 * percent)
        },
        scale: 0.1
    };
}

function calcTransform2(x, y) {
    const percent = x / window.innerWidth;
    return {
        translate: {
            transX: x / 25,
            transY: y / 25
        },
        changeColor: {
            red: 0,
            green: 0,
            blue: 0
        },
        transform: {
            translate3d: {
                tx: 1.2,
                ty: 1.0,
                tz: 0
            }
        },
        scale: Math.round(2000 * percent)/10000
    };
}

class Intro extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            mouse: { x: 0, y: 0 },
            elapsed: 0,
            substringLength: 0,
            start: new Date(),
            currentArrayNumber: 0
        };
    }

    handleMouseMove(event) {
        this.setState({
            mouse: { x: event.clientX, y: event.clientY }
        });
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.timerHi);
    }

    tick = () => {
        clearInterval(this.timerHi);

        this.setState(
            {
                elapsed: new Date() - this.props.start,
                currentArrayNumber: (this.state.currentArrayNumber + 1) % helloStrings.length
            },
            this.changeCurrentHi
        );
    };

    tickHi = () => {
        if (this.state.substringLength <= helloStrings[this.state.currentArrayNumber].length) {
            this.setState({
                substringLength: this.state.substringLength + 1
            });
        }
    };

    changeCurrentHi = () => {
        this.setState({
            substringLength: 0
        });
        this.timerHi = setInterval(this.tickHi, 130);
    };

    render() {
        return (
            <div className="v2-agency-hero">
                <div className="v2-agency-herowrapper" onMouseMove={this.handleMouseMove}>
                    <div className="v2-agency-hello">hello,</div>
                    <div className="typed-words">
                        {helloStrings[this.state.currentArrayNumber].substring(0, this.state.substringLength)}
                    </div>
                    <div className="v2-divider-150-5-30" />
                    <h1 className="v2-header-agency-hero-h1">
                        rightcolours is a Frankfurt based international creative agency for design, strategy &amp; visual
                        communication.
                    </h1>
                    <p className="v2-paragraph-standard">
                        Our mission is to help companies and institutions grow, adapt, raise awareness and achieve their goals
                        through purposeful and strategic visual communication across all relevant channels, both online and offline.
                    </p>
                    <a href="https://github.com" className="v2-button-1 w-button">
                        Learn more
                    </a>
                    <div className="agency-hero-circlebox">
                        <Baloon
                            top="18%"
                            right="26%"
                            backgroundColor={
                                {
                                    r: 238,
                                    g: 213,
                                    b: 229,
                                    a: 0.45
                                }
                            }
                            mouse={this.state.mouse}
                            transformHandler={calcTransform}
                        />
                        <Baloon
                            top="38%"
                            right="13%"
                            backgroundColor={
                                {
                                    r: 205,
                                    g: 232,
                                    b: 225,
                                    a: 0.5
                                }
                            }
                            mouse={this.state.mouse}
                            transformHandler={calcTransform2}
                        />
                        <Baloon
                            top="18%"
                            right="0%"
                            backgroundColor={
                                {
                                    r: 248,
                                    g: 242,
                                    b: 201,
                                    a: 0.5
                                }
                            }
                            mouse={this.state.mouse}
                            transformHandler={calcTransform1}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
