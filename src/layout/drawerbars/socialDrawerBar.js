import { useMemo } from "react";

import styles from "./drawerThemes.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

import useMediaQuery from "hooks/useMediaQuery";

import IconBtn from "components/buttons/iconBtn";
import Drawer from "components/containers/drawer";

import HeroAnimation from "layout/components/heroAnimation";

const SocialDrawerBar = (props) => {
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
    const drawerClasses = `${drawerStyles.drawerSection} ${drawerStyles.socialSection}`;

    if (switchState) {
        return (
            <HeroAnimation orientation={props.orientation} width="80px">
                <div
                    // prettier-ignore
                    className={sidebarClasses}
                    style={sidebarStyle}
                    id={"socialIconBar"}
                >
                    {props.data.map((singleEntry) => (
                        <IconBtn
                            link={singleEntry.link}
                            // prettier-ignore
                            iconClasses={singleEntry.iconClasses}
                            // Not a great id, temporary measure!!!
                            key={singleEntry.text}
                            primary={singleEntry.primaryColor}
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
                orientation={props.orientation}
                className={drawerStyles.drawer}
            >
                <h2>Social Links</h2>
                <div className={drawerClasses}>
                    {props.data.map((singleEntry) => (
                        <IconBtn
                            link={singleEntry.link}
                            // prettier-ignore
                            iconClasses={singleEntry.iconClasses}
                            // Not a great id, temporary measure!!!
                            key={singleEntry.text}
                            // primary={singleEntry.primaryColor}
                        >
                            {singleEntry.text}
                        </IconBtn>
                    ))}
                </div>
            </Drawer>
        );
    }
};

SocialDrawerBar.defaultProps = {
    type: "default",
    width: "",
    margin: "",
    orientation: "left",
};

export default SocialDrawerBar;
