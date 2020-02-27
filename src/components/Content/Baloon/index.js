import React, {Component} from 'react';
import style from './style.module.scss';

class Baloon extends Component {
    render() {
        const {top, right, left, size, backgroundColor, customClass, mouse = {x: 0, y: 0}, transformHandler} = this.props;
        const transformValue = transformHandler ? transformHandler(mouse.x, mouse.y) : {
            translate: {
                transX: 0,
                transY: 0
            }
        };

        return (
            <div className={`${style.agency_hero_circle} ${customClass}`}
                 style={{
                     top: top, right: right, left: left, willChange: 'transform', width: size, height: size,
                     transformStyle: 'preserve-3d',
                     backgroundColor: `rgba(${backgroundColor.r + transformValue.changeColor.red}, 
                                       ${backgroundColor.g + transformValue.changeColor.green}, 
                                       ${backgroundColor.b + transformValue.changeColor.blue}, 
                                       ${backgroundColor.a} 
                      )`,
                     transform: `translate3d(${transformValue.translate.transX}px, ${transformValue.translate.transY}px, 0px)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) scale3d(${0.9 + transformValue.scale},
                 ${0.9 + transformValue.scale}, 1)
                `
                 }}>
            </div>
        )
    }
}

export default Baloon;
