import { Link, NavLink, withRouter } from "react-router-dom";

import styles from "./navBar.module.scss";

function isActive({ isActive }) {
    return isActive ? styles.activeLink : "";
}

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <NavLink to="/" className={isActive}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/phase2" className={isActive}>
                        Phase 2 Summary
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
