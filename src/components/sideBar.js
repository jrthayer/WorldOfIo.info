import React, { useState, useEffect } from "react";
import "../styles/sidebar.scss";

import { useScroll } from "./providers/scrollProvider";
import { useViewport } from "./providers/viewportProvider";

const Sidebar = (props) => {
    const footerHeight = 100;
    let classesDefault = `sidebar ${props.classes} ${props.orientation} sidebar-${props.orientation}`;
    let initialClasses = ` hide-${props.orientation}`;
    if (props.sidebarAction === "heroHide") {
        initialClasses += " onHero";
    }

    const { yOffset, offsetHeight } = useScroll();
    const { height } = useViewport();

    const [classes, setClasses] = useState(classesDefault + initialClasses);

    useEffect(() => {
        if (props.sidebarAction === "heroHide") {
            let extraClasses = "";

            if (yOffset < height) {
                extraClasses += "onHero";
                if (yOffset > 0) {
                    extraClasses += ` hide-${props.orientation}`;
                }
            }

            //First condition is need because the scroll height is zero on first render
            //Second condition determines if the footer is visible
            if (
                offsetHeight !== 0 &&
                yOffset + height >= offsetHeight - (footerHeight - 1)
            ) {
                extraClasses += ` hide-${props.orientation}`;
            }

            setClasses(`${classesDefault} ${extraClasses}`);
        } else {
            setClasses(classesDefault);
        }
    }, [yOffset, offsetHeight]);

    return <div className={classes}>{props.children}</div>;
};

export default Sidebar;
