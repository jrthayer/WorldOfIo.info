import { useMemo } from "react";

import styles from "./drawerThemes.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

import useMediaQuery from "hooks/useMediaQuery";

import Btn from "components/buttons/btn";
import IconBtn from "components/buttons/iconBtn";
import Drawer from "components/containers/drawer";

import HeroAnimation from "layout/components/heroAnimation";

const NavigationDrawerBar = (props) => {
    let themeClass;
    if (props.type === "default") {
        themeClass = styles.default;
    } else if (props.type === "transparent") {
        themeClass = styles.transparent;
    } else if (props.type === "defaultTransparent") {
        themeClass = styles.defaultTransparent;
    } else {
        console.error("invalid social drawer class type!");
    }

    const switchState = useMediaQuery(props.mediaQuery);

    const sidebarStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--width"] = props.width;
        styleObject["--margin"] = props.margin;

        return styleObject;
    }, [props.width, props.margin]);

    // prettier-ignore
    const sidebarClasses = `${iconBarStyles.iconBar} ${iconBarStyles[`${props.orientation}`]} ${themeClass}`;

    if (switchState) {
        return (
            <HeroAnimation orientation={props.orientation} width="80px">
                <div
                    // prettier-ignore
                    className={sidebarClasses}
                    style={sidebarStyle}
                    id="navigationIconBar"
                >
                    {props.data.map((singleEntry) => (
                        <IconBtn
                            link={singleEntry.link}
                            // prettier-ignore
                            iconClasses={"fas fa-dot-circle fa-2x"}
                            samePage
                            // Not a great id, temporary measure!!!
                            key={singleEntry.text}
                        >
                            {singleEntry.text}
                        </IconBtn>
                    ))}
                </div>
            </HeroAnimation>
        );
    } else {
        return (
            <Drawer
                id="navigationDrawer"
                orientation={props.orientation}
                className={drawerStyles.drawer}
            >
                <h2>Navigation Drawer</h2>
                <div className={`${drawerStyles.drawerSection} text-center`}>
                    {props.data.map((singleEntry) => (
                        <Btn
                            link={singleEntry.link}
                            // Not a great id, temporary measure!!!
                            key={singleEntry.text}
                            samePage
                        >
                            {singleEntry.text}
                        </Btn>
                    ))}
                </div>
            </Drawer>
        );
    }
};

NavigationDrawerBar.defaultProps = {
    width: "",
    margin: "",
    orientation: "left",
};

export default NavigationDrawerBar;
