import React, {Component} from 'react';
import Header from "./components/Header";
import Intro from "./components/Content/Intro/intro";
import About from "./components/Content/AboutSection/about"
import News from "./components/Content/News/news";
import Work from "./components/Content/Work/work";
import Capabilities from "./components/Content/Capabilities/capabilities";
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
