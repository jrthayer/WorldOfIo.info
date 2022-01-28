import React, { Fragment } from "react";
import "../styles/drawer.scss";

import Screen from "./screen";

import { useState, useEffect } from "react";

import { useModalState } from "./providers/modalStateProvider";

import Swipe from "swipejs";

const Drawer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { setModalState, modalState } = useModalState(false);

    let classes = `drawer drawer-${props.orientation} ${props.orientation} ${props.className}`;

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
                <div className="drawerContent">{props.children}</div>

                <button onClick={toggleDrawer}>X</button>
            </nav>
            {drawerOpen ? <Screen></Screen> : ""}
        </Fragment>
    );
};

export default Drawer;
