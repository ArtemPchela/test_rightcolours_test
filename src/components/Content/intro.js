import React, {Component} from 'react';
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
    return {
        translate: {
            transX: x / 25,
            transY: y / 25,
        }
    }
}

function calcTransform1(x, y) {
    return {
        translate: {
            transX: -x / 25,
            transY: y / 25
        }
    }
}

function calcTransform2(x, y) {
    return {
        translate: {
            transX: -x / 25,
            transY: -y / 25
        }
    }
}

class Intro extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            mouse: {x: 0, y: 0},
            elapsed: 0,
            currentHi: helloStrings[0],
            start: new Date(),
            currentArrayNumber: 0
        };
    }

    handleMouseMove(event) {
        this.setState({
        mouse: {x: event.clientX, y: event.clientY}
        });
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 2500);
        // this.timerLetter = setInterval(this.tickLetter, 130);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({elapsed: new Date() - this.props.start,
        currentArrayNumber: (this.state.currentArrayNumber + 1) % (helloStrings.length)
        });
        console.log(this.state.currentArrayNumber);
    };

    // setInterval(tickString, 100)


    render() {
        return (
            <div className='v2-agency-hero'>
                <div className="v2-agency-herowrapper" onMouseMove={this.handleMouseMove}>
                    <div className="v2-agency-hello">hello,</div>
                    <div className="typed-words">{helloStrings[this.state.currentArrayNumber]}</div>
                    <div className="v2-divider-150-5-30"/>
                    <h1 className="v2-header-agency-hero-h1">
                        rightcolours is a Frankfurt based international creative agency
                        for design, strategy &amp; visual communication.
                    </h1>
                    <p className="v2-paragraph-standard">
                        Our mission is to help companies and institutions grow, adapt, raise awareness and achieve their
                        goals
                        through purposeful and strategic visual communication across all relevant channels, both online
                        and
                        offline.
                    </p>
                    <a href="https://github.com" className="v2-button-1 w-button">
                        Learn more
                    </a>
                    <div className="agency-hero-circlebox">
                        <Baloon top='18%' right='26%' backgroundColor='rgba(238, 213, 229, 0.45)' mouse={this.state.mouse}
                                transformHandler={calcTransform}
                        />
                        <Baloon top='38%' right='13%' backgroundColor='rgba(205, 232, 225, 0.5)' mouse={this.state.mouse}
                                transformHandler={calcTransform2}
                        />
                        <Baloon top='18%' right='0%' backgroundColor='rgba(220, 230, 249, 0.5)' mouse={this.state.mouse}
                                transformHandler={calcTransform1}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;
