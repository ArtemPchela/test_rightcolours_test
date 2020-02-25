import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Intro from "./components/Content/intro";
import About from "./components/Content/about"
import News from "./components/Content/news";
import Work from "./components/Content/work";
import Capabilities from "./components/Content/capabilities";
import Footer from "./components/Footer";
// import MobileNavigation from "./components/mobileNavigation";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                {/*<MobileNavigation />*/}
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
