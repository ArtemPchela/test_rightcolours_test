import React, {Component} from 'react';
import award1 from './img/Photography_Award1_1920x1003.jpg';
import award2 from './img/Photography_Award2_2300x732.jpg';

class News extends Component {
    render() {
        return (
            <div className="v2-agency-section-news">
                <div className="v2-wrapper">
                    <div className="v2-divider-section"/>
                    <div className="v2-smalltext">our latest news</div>
                    <div className="v2-divider-250-10-10"/>
                    <h1 className="v2-header-agency-h3 adjustment21">
                        dpa Infographic Award 2019
                    </h1>
                    <p
                        className="v2-paragraph-standard">We are proud to announce that our UNICEF project “
                        <a href="https://github.com"
                           className="sp-textlink">
                            The Adolescent Brain
                        </a>“
                        has been recognized with the &nbsp;
                        <a href="https://github.com"
                           className="sp-textlink">
                            dpa Infographic award
                        </a>
                        &nbsp;2019 (2nd Place Winner) in the category
                        “Infographics for companies, organizations, and institutions“.
                    </p>
                    <img
                        src={award1}
                        style={{width: "860px"}} alt="dpa Infografik award"
                        sizes="(max-width: 991px) 95vw, 860px" className="v2-agency-photo1 adjustment22"/>
                    <p className="v2-paragraph-standard">
                        The dpa-infografik, a subsidiary of the Deutsche Presse-Agentur
                        (dpa) awards this prize every year to the best infographics published in German-speaking
                        countries.
                        <br/>
                        <br/>
                        Commissioned by and in cooperation with UNICEF Office of Research -
                        Innocenti, we
                        have designed and produced the infographic series and the explainer video raising awareness
                        for
                        the official &nbsp;
                        <a href="https://github.com"
                           className="sp-textlink">publication</a> &nbsp;
                        „The Adolescent Brain - A second window
                        of opportunity“. We are more than happy to have partnered with Dale Rutstein and his team at
                        UNICEF Innocenti to visualize this unique project.
                        <br/>
                        <br/>
                        The award presentation was held
                        at the
                        dpa newsroom in Berlin on the 21st of November 2019.
                    </p>
                    <img
                        src={award2}
                        style={{width: "1150px"}} alt="dpa Infografik award"
                        sizes="95vw" className="v2-agency-photo-awardgroup"/>
                    <div className="awardphotocreditstext">Photo Credits: Monika Skolimowska/dpa (Deutsche Presse
                        Agentur)
                    </div>
                </div>
            </div>
        )
    }
}

export default News;
