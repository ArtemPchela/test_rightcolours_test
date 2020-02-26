import React, {Component} from "react";
import {Link} from "react-router-dom";
import styles from './style.module.scss';
import links from '../../links.json';
import burgerClose from './burgerImg/burgerClose.png';
import burger from './burgerImg/burger.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {headerCallapse: false, position: 0, isMobileNavOpen: false}

    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll)
    }

    checkScroll = () => {
        if (this.state.position <= window.pageYOffset) {
            this.setState({
                headerCallapse: true,
                position: window.pageYOffset
            });
        } else {
            this.setState({
                headerCallapse: false,
                position: window.pageYOffset
            });
        }
    };

    mobileOpenHandler = () => {
        this.setState({
            isMobileNavOpen: !this.state.isMobileNavOpen
        })
    };



    render() {
        return (
            <React.Fragment>
                <div
                    className={`${styles.header_nav} ${this.state.headerCallapse ? styles.out : ""}`}>
                    <div className={`${styles.header_nav_bar}`}>
                        <div className={`${styles.header_nav_wrapper}`}>
                            <a href="/" className={`${styles.header_logo} ${styles.logo_brand} ${styles.w__current}`}>
                                <div className={`${styles.logo}`}>rightcolours.</div>
                            </a>
                            <nav role="navigation"
                                 className={`${styles.nav_menu_wrapper} ${styles.w_hidden_medium} ${styles.w_hidden_small} ${styles.w_hidden_tiny} ${styles.w_nav_menu}`}>
                                {links.map(element =>
                                    <Link to='' key={element.href}
                                          url={element.href}
                                          className={`${styles.desktop_nav_link} ${styles.w_nav_link}`}
                                          activeClassName={styles.w__current}
                                          style={{maxWidth: '1150px'}}>
                                        {element.text}
                                    </Link>)
                                }
                            </nav>
                        </div>
                    </div>
                </div>



                <div className={`${styles.mobile_nav} ${styles.w_hidden_main}`}>
                    <div className={`${styles.mobile_wrapper}`}>
                        <div className={`${styles.mobile_menu} ${this.state.isMobileNavOpen ? styles.open : ""}`}>
                            <div className={`${styles.mobile_close_icon_wrapper}`}>
                                <div className={`${styles.mobile_close_icon}`} onClick={this.mobileOpenHandler}>
                                    <img
                                        src={burgerClose}
                                        width="25"  alt=""/>
                                </div>
                            </div>
                            <div className={`${styles.mobile_links_wrapper}`}>
                                {links.map(element =>
                                    <Link to='' key={element.href}
                                          url={element.href}
                                          className={`${styles.mobile_nav_links} ${styles.w_inline_block}`}
                                          activeClassName={styles.w__current}>
                                        <div className={`${styles.mobile_nav_link}`}>{element.text}</div>
                                    </Link>)
                                }
                            </div>
                        </div>
                        <div className={`${styles.mobile_nav_wrapper}`}
                             style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                            <div className={`${styles.mobile_nav_main}`}>
                                <div className={`${styles.mobile_logo_wrapper}`}>
                                    <div className={`${styles.logo} ${styles.mobile}`}>
                                        <a href="/" className="link w--current">rightcolours.</a>
                                    </div>
                                </div>
                                <div className={`${styles.mobile_menu_icon_open}`} onClick={this.mobileOpenHandler}>
                                    <img
                                        src={burger}
                                        width="25" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
