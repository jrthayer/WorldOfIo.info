import { NavLink } from "react-router-dom";

import styles from "./navBar.module.scss";

import { useScroll } from "components/providers/scrollProvider";
import { useViewport } from "components/providers/viewportProvider";

function isActive({ isActive }) {
    let classes = styles.navLink;
    if (isActive) {
        classes += ` ${styles.activeLink}`;
    }
    return classes;
}

const navJSX = (
    <nav className={styles.navBar}>
        <ul className={styles.linkContainer}>
            <NavLink
                to="/"
                className={isActive}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <li>Home</li>
            </NavLink>

            <li>
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
    </nav>
);

const NavBar = (props) => {
    return navJSX;
};

export default NavBar;
