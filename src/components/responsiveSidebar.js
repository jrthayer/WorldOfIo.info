import React, { useMemo } from "react";
// import "./drawer.css";

import { useEffect, useState } from "react";

import { useViewport } from "./providers/viewportProvider";

import Drawer from "./drawer";
import Sidebar from "./sideBar";

function appendClasses(name, classes) {
    let returnClasses = "";

    classes.forEach((element) => {
        returnClasses += `${name}-${element} `;
    });

    return returnClasses;
}

const ResponsiveSidebar = (props) => {
    const [isDrawer, setIsDrawer] = useState(false);
    const { width, height } = useViewport();

    // prettier-ignore
    let drawerClasses = useMemo(() => appendClasses("drawer", props.drawer),[]);
    // prettier-ignore
    let sidebarClasses = useMemo(() => appendClasses("sidebar", props.sidebar),[]);

    useEffect(() => {
        if (width > 700 && height > 700) {
            setIsDrawer(false);
        } else {
            setIsDrawer(true);
        }
    });

    if (isDrawer) {
        return (
            <Drawer orientation={props.orientation}>{props.children}</Drawer>
        );
    } else {
        return (
            <Sidebar
                classes={sidebarClasses}
                sidebarAction={props.sidebarAction}
                orientation={props.orientation}
            >
                {props.children}
            </Sidebar>
        );
    }
};

export default ResponsiveSidebar;
