import { NavLink } from "react-router-dom";
import { useState } from "react";

import styles from "./navBar.module.scss";

function isActive({ isActive }) {
    let classes = styles.navLink;
    if (isActive) {
        classes += ` ${styles.activeLink}`;
    }
    return classes;
}

const NavBar = (props) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        setActive((prevState) => {
            return !prevState;
        });
    };

    return (
        <nav className={styles.navBar}>
            <ul
                className={
                    active
                        ? `${styles.active} ${styles.linkContainer}`
                        : `${styles.linkContainer}`
                }
            >
                <li className={styles.link}>
                    <NavLink
                        to="/"
                        className={isActive}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        Home
                    </NavLink>
                </li>

                <li className={styles.link}>
                    <NavLink
                        to="/phase2"
                        className={isActive}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        Phase 2 Summary
                    </NavLink>
                </li>
            </ul>

            <a
                href="#"
                className={
                    active
                        ? `${styles.active} ${styles.button}`
                        : `${styles.button}`
                }
                onClick={toggleActive}
            >
                <span className={styles.buttonBar}></span>
                <span className={styles.buttonBar}></span>
                <span className={styles.buttonBar}></span>
            </a>
        </nav>
    );
};

export default NavBar;
