import React, {Component} from 'react';
import styles from "../Footer/style.module.scss";

class Footer extends Component {
    render() {
        return (
            <div className={`${styles.footer}`}>
                <div className={`${styles.content_wrapper} ${styles.footer_section}`}>
                    <div className={`${styles.logo_footer}`}/>
                    <p className={`${styles.medium_statement}`}>
                        Intelligent design &amp; visual communication
                        <br/>
                        for forward
                        thinking organizations.
                    </p>
                    <div className={`${styles.divider_footer} ${styles.divider_footer_25}`}/>
                    <div className={`${styles.footer_text_bold}`}>New Business &amp; General Inquiries</div>
                    <div className={`${styles.footer_text} ${styles.adjustment15}`}>Aleksandar Jovanovic<br/>
                        <a href="http://twitter.com"
                           className={`${styles.footer_phone_link}`}>
                            +49(0)69-34878017
                        </a>
                        <br/>
                        alex@rightcolours.com
                    </div>
                    <div className={`${styles.footer_text_bold}`}>Job &amp; Intern Opportunities</div>
                    <div className={`${styles.footer_text} ${styles.adjustment15}`}>
                        Kristina Gluic<br/>kristina@rightcolours.com<br/>
                    </div>
                    <div className={`${styles.footer_text_bold}`}>Map &amp; Directions</div>
                    <div className={`${styles.footer_text}`}>
                        <a href="https://github.com"
                           className="footer-map-link">
                            Schumannstr.11<br/>60325 Frankfurt am
                            Main (Germany)
                        </a>
                    </div>
                    <div className={`${styles.divider_footer} ${styles.divider_footer_25}`}/>
                    <div className={`${styles.social_icons_wrapper}`}>
                        <a href="https://twitter.com"
                           className={`${styles.icon_30px} ${styles.twitter}`}>
                        </a>
                        <a href="https://github.com"
                           className={`${styles.icon_30px} ${styles.youtube}`}>

                        </a>
                        <a href="https://linkedin.com"
                           className={`${styles.icon_30px} ${styles.linkedin}`}>
                        </a>
                        <a href="https://instagram.com"
                           className={`${styles.icon_30px} ${styles.instagram}`}>
                        </a>
                    </div>
                    <p className="footer-section-legal">
                        <a href="https://github.com" className={`${styles.link_highlight}`}>
                            Legal
                        </a> | <a href="https://github.com" className={`${styles.link_highlight}`}>
                            Impressum
                        </a> | <a href="https://github.com"
                           className={`${styles.link_highlight}`}>
                            Data Privacy
                        </a> | <a href="https://github.com" className={`${styles.link_highlight}`}>
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
