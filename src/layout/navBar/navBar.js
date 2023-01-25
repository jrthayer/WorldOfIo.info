import { NavLink } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";

import styles from "./navBar.module.scss";

import Screen from "components/screen";

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
        setActive(!active);
    };

    useEffect(() => {
        document.body.style.overflowY = active ? "hidden" : "scroll";

        return () => {
            document.body.style.overflowY = "scroll";
        };
    });

    return (
        <Fragment>
            <nav
                className={
                    active
                        ? `${styles.active} ${styles.navBar}`
                        : `${styles.navBar}`
                }
            >
                <ul className={styles.linkContainer}>
                    <li className={styles.link}>
                        <NavLink to="/" className={isActive}>
                            Home
                        </NavLink>
                    </li>

                    <li className={styles.link}>
                        <NavLink to="/phase2" className={isActive}>
                            Phase 2 Summary
                        </NavLink>
                    </li>
                </ul>

                <a
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
            {active ? <Screen></Screen> : null}
        </Fragment>
    );
};

export default NavBar;
