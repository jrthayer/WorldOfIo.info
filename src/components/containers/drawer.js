import React, { Fragment, useMemo, useState, useEffect } from "react";
import styles from "./drawer.module.scss";

import Screen from "../screen";

import { useModalState } from "../providers/modalStateProvider";

const Drawer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { setModalState, modalState } = useModalState(false);

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
        document.body.style.overflow = drawerOpen ? "hidden" : "auto";

        return () => {
            setModalState(false);
            document.body.style.overflow = "auto";
        };
    });

    return (
        <Fragment>
            <nav
                onClick={toggleDrawer}
                id={props.id}
                className={
                    drawerOpen
                        ? `${classes} active-${props.orientation}`
                        : `${classes}`
                }
            >
                <div className={styles.content}>{props.children}</div>

                <button
                    onClick={toggleDrawer}
                    // prettier-ignore
                    className={`${styles.button} ${drawerOpen ? styles.buttonFlip : ""}`}
                >
                    <i className={`${styles.buttonIcon} ${buttonClasses}`}></i>
                </button>
            </nav>
            {drawerOpen ? <Screen></Screen> : ""}
        </Fragment>
    );
};

export default Drawer;
