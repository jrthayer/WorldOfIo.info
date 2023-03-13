import { useMemo } from "react";

//====== Hooks
import useMediaQuery from "hooks/useMediaQuery";

//====== CSS styles
import styles from "./styles/drawerThemes.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

//====== Components
import IconBtn from "components/buttons/iconBtn";
import Drawer from "layout/drawerbars/drawer/drawer";
import HeroAnimation from "layout/components/heroAnimation";

/**
 * It takes an array of objects as a prop, and returns a button for each object in the array.
 *
 * The button is a custom component, which is defined in a separate file.
 *
 * @returns An array of IconBtn components.
 */
function LinkButtons({ data }) {
    return (
        <>
            {data.map((singleEntry) => (
                <IconBtn
                    link={singleEntry.link}
                    // prettier-ignore
                    type={singleEntry.type ?? singleEntry.text}
                    // Not a great id, temporary measure!!!
                    key={singleEntry.text}
                    primary={singleEntry.primaryColor}
                    samePage={singleEntry.samePage ?? false}
                >
                    {singleEntry.text}
                </IconBtn>
            ))}
        </>
    );
}

//====== Setters
// Determines theme styling, specifically color/bg styles
function setTheme(type) {
    let themeClass = styles.default;

    if (type === "transparent") {
        themeClass = styles.transparent;
    } else if (type === "defaultTransparent") {
        themeClass = styles.defaultTransparent;
    } else {
    }

    return themeClass;
}

// Sets inline styles object for the sidebar
function setSidebarParams(width, margin) {
    let styleObject = {};

    styleObject["--width"] = width ?? "285px";
    styleObject["--margin"] = margin ?? "0px";

    return styleObject;
}

//====== Main Component
const DrawerBar = (props) => {
    let themeClass = useMemo(() => setTheme(props.type), [props.type]);
    // prettier-ignore
    let sidebarStyle = useMemo(()=> setSidebarParams(props.width, props.margin), [props.width, props.margin])
    //prettier-ignore
    const switchState = useMediaQuery(props.mediaQuery ?? "(min-width: 1200px) and (min-height: 700px)");

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
                    <LinkButtons data={props.data} />
                </div>
            </HeroAnimation>
        );
    } else {
        return (
            <Drawer
                orientation={props.orientation}
                className={drawerStyles.drawer}
            >
                <h2>{props.title}</h2>
                <div className={drawerClasses}>
                    <LinkButtons data={props.data} />
                </div>
            </Drawer>
        );
    }
};

DrawerBar.defaultProps = {
    type: "default",
    title: "Links",
    orientation: "left",
};

export default DrawerBar;
