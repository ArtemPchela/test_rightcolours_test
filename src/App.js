import React, {Component} from 'react';
import Header from "./components/Header";
import Intro from "./components/Content/Intro";
import About from "./components/Content/AboutSection"
import News from "./components/Content/News";
import Work from "./components/Content/Work";
import Capabilities from "./components/Content/Capabilities";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Intro />
                <About />
                <News />
                <Work />
                <Capabilities />
                <Footer />
            </div>
        );
    }
}

export default App;
