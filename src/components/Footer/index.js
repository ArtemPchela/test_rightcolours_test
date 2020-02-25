import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="footer">
                <div className="content-wrapper footer-section">
                    <div className="rclogosymbol"/>
                    <p className="medium-statement">
                        Intelligent design &amp; visual communication
                        <br/>
                        for forward
                        thinking organizations.
                    </p>
                    <div className="divider-100-25-25 _25tp"/>
                    <div className="footer-text-bold">New Business &amp; General Inquiries</div>
                    <div className="footer-text adjustment15">Aleksandar Jovanovic<br/>
                        <a href="http://twitter.com"
                           className="footer-phone-link">
                            +49(0)69-34878017
                        </a>
                        <br/>
                        alex@rightcolours.com
                    </div>
                    <div className="footer-text-bold">Job &amp; Intern Opportunities</div>
                    <div className="footer-text adjustment15">
                        Kristina Gluic<br/>kristina@rightcolours.com<br/>
                    </div>
                    <div className="footer-text-bold">Map &amp; Directions</div>
                    <div className="footer-text">
                        <a href="https://github.com"
                           className="footer-map-link">
                            Schumannstr.11<br/>60325 Frankfurt am
                            Main (Germany)
                        </a>
                    </div>
                    <div className="divider-100-25-25 _25tp"/>
                    <div className="socialicons-wrapper">
                        <a href="https://twitter.com"
                           className="socialicon-30px twitter w-inline-block">
                        </a>
                        <a href="https://github.com"
                           className="socialicon-30px youtube w-inline-block">

                        </a>
                        <a href="https://linkedin.com"
                           className="socialicon-30px linkedin w-inline-block">
                        </a>
                        <a href="https://instagram.com"
                           className="socialicon-30px instagram w-inline-block">
                        </a>
                    </div>
                    <p className="footer-section-legal">
                        <a href="https://github.com" className="removelinkhighlight">
                            Legal
                        </a> | <a href="https://github.com" className="removelinkhighlight">
                            Impressum
                        </a> | <a href="https://github.com"
                           className="removelinkhighlight">
                            Data Privacy
                        </a> | <a href="https://github.com" className="removelinkhighlight">
                             Datenschutz
                        </a>
                        <br/>
                            Copyright © 2019 GbR Rightcolours. All Rights Reserved.<br/>
                    </p>
                </div>
            </div>
  )
 }
}

export default Footer;
