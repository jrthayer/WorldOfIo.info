import React, { Fragment, useMemo, useState, useEffect } from "react";
import styles from "./drawer.module.scss";

import Screen from "../../../components/screen";

const Drawer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const buttonClasses = useMemo(() => {
        if (props.orientation === "left") {
            return "fas fa-angle-double-right";
        } else {
            return "fas fa-angle-double-left";
        }
    }, []);

    let classes = `${styles.drawer} ${styles[`drawer-${props.orientation}`]} ${
        props.className
    }`;

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
        document.body.style.overflowY = drawerOpen ? "hidden" : "scroll";

        return () => {
            document.body.style.overflowY = "scroll";
        };
    });

    return (
        <Fragment>
            <nav
                onClick={toggleDrawer}
                id={props.id}
                className={
                    drawerOpen
                        ? `${classes} ${styles[`active-${props.orientation}`]}`
                        : `${classes}`
                }
            >
                <div className={styles.content}>{props.children}</div>

                <button
                    onClick={toggleDrawer}
                    // prettier-ignore
                    className={`${styles.button} ${drawerOpen ? styles.flip : ""}`}
                >
                    <i className={`${styles.buttonIcon} ${buttonClasses}`}></i>
                </button>
            </nav>
            {drawerOpen ? <Screen drawer></Screen> : ""}
        </Fragment>
    );
};

export default Drawer;
