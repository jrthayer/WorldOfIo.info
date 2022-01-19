import React, { useState, useEffect } from "react";
import "../styles/sidebar.scss";

import { useScroll } from "./providers/scrollProvider";
import { useViewport } from "./providers/viewportProvider";

const Sidebar = (props) => {
    let classesDefault = `sidebar ${props.classes} ${props.orientation} sidebar-${props.orientation}`;
    let initialClasses = ` hide-${props.orientation}`;
    if (props.sidebarAction === "heroHide") {
        initialClasses += " onHero";
    }

    const { xOffset, yOffset } = useScroll();
    const { width, height } = useViewport();

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

            setClasses(`${classesDefault} ${extraClasses}`);
        } else {
            setClasses(classesDefault);
        }
    });

    return <div className={classes}>{props.children}</div>;
};

export default Sidebar;
