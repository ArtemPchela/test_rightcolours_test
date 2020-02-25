import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <div id='about' className='v2-agency-section1'>
                <div className='v2-wrapper'>
                    <div className="v2-divider-section adjustment21"/>
                    <div className="v2-smalltext">our background</div>
                    <div className="v2-divider-250-10-10 adjustment5"/>
                    <p className="v2-paragraph-medium">Founded in 2012 as a creative boutique agency, we’re a small,
                        diverse group of makers bringing together experience from various creative and business domains.
                        We share a mutual obsession for simplicity, colours and visual communication. Our achievements
                        build on collaboration, experimentation and user-centric attention to detail.
                    </p>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9da7cfe6b3b424066f029d_V2_Photography_Agency01_1920x870.jpg"
                        alt="" className="v2-agency-photo1" style={{width: '960px'}}/>
                    <div className="v2-smalltext adjustment8">our clients</div>
                    <div className="v2-divider-250-10-10"/>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5d9df237ad4a3a3074d094d5_V2_ClientLogos.svg"
                        alt="" className="v2-clientlogos"/>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5dad68c265b2d982371440d7_V2_ClientLogos_Mobile.svg"
                        alt="" className="v2-clientlogos-mobile"/>
                    <div data-w-id="ed35b182-a8ed-8c21-4e1f-ac98a65a80bd" className="agency-circle1"
                         style={{
                             willChange: 'transform',
                             transform: 'translate3d(106.306px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d'
                         }}/>
                    <img
                        src="https://uploads-ssl.webflow.com/5af9558c779b5a43b17ff034/5da41ac08d4d2639508034d0_V2_Element_DiagonalLines2.svg"
                        style={{width: '800px'}} alt="" className="ourbackground-diagonallines"/>
                </div>
            </div>
        )
    }
}


export default About;


























