import React, { Fragment } from "react";
import "../styles/drawer.scss";

import Screen from "./screen";

import { useState, useEffect } from "react";

import { useModalState } from "./providers/modalStateProvider";

const Drawer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { setModalState, modalState } = useModalState(false);

    let classes = `drawer drawer-${props.orientation} ${props.orientation} ${props.className}`;

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
        //WARNING: Pretty sure this is dangerous so I'll revisit this later
        if (drawerOpen) {
        } else {
        }

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

// useEffect(() => {
// if (width > 1000 && height > 700) {
//     if (yOffset === 0 || yOffset > height - 50) {
//         setDrawerOpen(true);
//         console.log("drawer open");
//     } else {
//         setDrawerOpen(false);
//     }
// } else {
//     setDrawerOpen(false);
// }
// props.modalFunc(false);
// if (width > props.width && height > props.height) {
//     setDrawerOpen(true);
//     props.modalFunc(false);
// } else {
//     setDrawerOpen(false);
//     props.modalFunc(drawerOpen);
// }
// }, [width, height]);
