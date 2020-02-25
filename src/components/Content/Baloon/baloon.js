import React, {Component} from 'react';
import style from './style.module.scss';

class Baloon extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {top, right, backgroundColor, mouse={x:0, y:0}, transformHandler} = this.props;
        const transformValue = transformHandler ? transformHandler(mouse.x, mouse.y) : {translate: {transX: 0, transY: 0}};
        return(
            <div className={`${style.agency_hero_circle}`}
                 style={{top: top, right: right, backgroundColor: backgroundColor, willChange: 'transform',
                     transformStyle: 'preserve-3d',
                transform: `translate3d(${transformValue.translate.transX}px, ${transformValue.translate.transY}px, 0px)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)
                `}}>
                {mouse.x}{mouse.y}
            </div>
        )
    }
}

export default Baloon;
