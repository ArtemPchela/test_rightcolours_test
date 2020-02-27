import React, {Component} from "react";
import Baloon from "../Baloon";

function calcTransform(x, y) {
     return {
        translate: {
            transX: x,
            transY: y
        },
        changeColor: {
            red: 0,
            green: 0,
            blue: 0
        },
        scale: 0.1
    };
}

class About extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            scroll: {
                x: 0,
                y: 0
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll)
    }

    checkScroll = () => {
        const aboutRect = this.myRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (windowHeight - aboutRect.bottom + aboutRect.height > 0 && aboutRect.top > 0) {
            this.setState({
                scroll: {
                    y: 0,
                    x: 150 - (windowHeight - aboutRect.bottom + aboutRect.height) / windowHeight * 150
                }

            });
        }
    };

    render() {
        return (
            <div id="about" className="v2-agency-section1" >
                <div className="v2-wrapper">
                    <div className="v2-divider-section adjustment21"/>
                    <div className="v2-smalltext">our background</div>
                    <div className="v2-divider-250-10-10 adjustment5"/>
                    <p className="v2-paragraph-medium" ref={this.myRef}>Founded in 2012 as a creative boutique agency, we’re a small,
                        diverse group
                        of makers
                        bringing together experience from various creative and business domains. We share a mutual
                        obsession for
                        simplicity, colours and visual communication. Our achievements build on collaboration,
                        experimentation and
                        user-centric attention to detail.</p>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9da7cfe6b3b424066f029d_V2_Photography_Agency01_1920x870.jpg"
                        style={{width: "960px"}}
                        srcSet="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9da7cfe6b3b424066f029d_V2_Photography_Agency01_1920x870-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9da7cfe6b3b424066f029d_V2_Photography_Agency01_1920x870-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9da7cfe6b3b424066f029d_V2_Photography_Agency01_1920x870.jpg 1920w"
                        alt="" className="v2-agency-photo1"/>
                    <div className="v2-smalltext adjustment8">our clients</div>
                    <div className="v2-divider-250-10-10"/>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9df237ad4a3a3074d094d5_V2_ClientLogos.svg"
                        alt="" className="v2-clientlogos"/>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5dad68c265b2d982371440d7_V2_ClientLogos_Mobile.svg"
                        alt="" className="v2-clientlogos-mobile"/>
                    <Baloon
                        customClass="about_baloon"
                        left="4%"
                        top="18%"
                        size="320px"
                        backgroundColor={
                            {
                                r: 244,
                                g: 241,
                                b: 211,
                                a: 0.5
                            }
                        }
                        mouse={this.state.scroll}
                        transformHandler={calcTransform}
                    />
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5da41ac08d4d2639508034d0_V2_Element_DiagonalLines2.svg"
                        style={{width: '800px'}} alt="" className="ourbackground-diagonallines"/>
                </div>
            </div>
        )
    }
}

export default About;
