import { useMemo } from "react";

import styles from "./drawerThemes.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

import useMediaQuery from "hooks/useMediaQuery";

import IconBtn from "components/buttons/iconBtn";
import Drawer from "layout/drawerbars/drawer/drawer";

import HeroAnimation from "layout/components/heroAnimation";

import socialData from "data/social.js";

/**
 * This function returns a fragment that contains a map of the socialData array, which returns an
 * IconBtn component for each entry in the array.
 * @returns An array of IconBtn components.
 */
function SocialButtons() {
    return (
        <>
            {socialData.map((singleEntry) => (
                <IconBtn
                    link={singleEntry.link}
                    // prettier-ignore
                    type={singleEntry.type !== undefined ? singleEntry.type : singleEntry.text}
                    // Not a great id, temporary measure!!!
                    key={singleEntry.text}
                    primary={singleEntry.primaryColor}
                >
                    {singleEntry.text}
                </IconBtn>
            ))}
        </>
    );
}

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

    const switchState = useMediaQuery(
        "(min-width: 1200px) and (min-height: 700px)"
    );

    const sidebarStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--width"] = "285px";
        styleObject["--margin"] = "0px";

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
                    <SocialButtons />
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
                    <SocialButtons />
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
