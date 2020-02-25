import React from "react";
import Mouse, {} from "../mouseTrackerHOC";



class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            // <img src="" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
            <div style={{width: '50px',height: '50px',position: 'absolute', left: mouse.x, top: mouse.y, backgroundColor: 'red'}}>12345</div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div style={{height: '100px'}}>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

export default MouseTracker;
