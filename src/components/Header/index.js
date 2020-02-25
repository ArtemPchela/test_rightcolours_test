import React, {Component} from "react";
import {Link} from "react-router-dom";
import styles from './style.module.scss';


const links = [
    {
        href: '/',
        text: 'agency.'
    },
    {
        href: '/people',
        text: 'people.'
    },
    {
        href: '/projects',
        text: 'projects.'
    },
    {
        href: '/thoughts',
        text: 'thoughts.'
    },
    {
        href: '#footer',
        text: 'contact.'
    }
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {headerCallapse: true, position: 0}

    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll)
    }

    checkScroll = () => {
            if(this.state.position < window.pageYOffset) {
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

    render() {
        return (
            <div
                className={`${styles.desktop_navigation} ${styles.w_hidden_medium}
                 ${styles.w_hidden_small} ${styles.w_hidden_tiny}  ${this.state.headerCallapse ? styles.out : ""}`}>
                {/*style={{ color: "white", transform: 'translate3d(0px, 0px, 9999px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d'}}>*/}
                <div data-collapse="none" data-animation="over-left" data-duration="750" data-easing="ease-in-out"
                     data-easing2="ease-in-out" className={`${styles.fixed_desktop_navbar} ${styles.w_nav}`}>
                    <div className={`${styles.nav_1150_wrapper} ${styles.w_container}`}>
                        <a href="/" className={`${styles.nav_logo_wrapper} ${styles.w_nav_brand} ${styles.w__current}`}>
                            <div className={`${styles.logo}`}>rightcolours.</div>
                        </a>
                        <nav role="navigation" key={links}
                             className={`${styles.nav_menu_wrapper} ${styles.w_hidden_medium} ${styles.w_hidden_small} ${styles.w_hidden_tiny} ${styles.w_nav_menu}`}>
                            {links.map(element =>
                                <Link to=''
                                    url={element.href}
                                    className={`${styles.desktop_navlink} ${styles.w_nav_link}`}
                                    activeClassName={styles.w__current}
                                    style={{maxWidth: '1150px'}}>
                                    {element.text}
                                </Link>)
                            }
                        </nav>
                    </div>
                    <div className="w-nav-overlay" data-wf-ignore=""/>
                </div>
            </div>
        )
    }
}

export default Header;
