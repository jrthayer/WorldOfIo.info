import { useMemo } from "react";

import styles from "./socialDrawerBar.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

import useMediaQuery from "hooks/useMediaQuery";
import useCheckNull from "hooks/useCheckNull";

import IconBtn from "components/buttons/iconBtn";
import Drawer from "components/containers/drawer";

import HeroAnimation from "layout/components/heroAnimation";

const SocialDrawerBar = (props) => {
    const switchState = useMediaQuery(props.mediaQuery);
    const orientation = useCheckNull(props.orientation, "left");

    const width = useCheckNull(props.width);
    const margin = useCheckNull(props.margin);

    const sidebarStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--width"] = width;
        styleObject["--margin"] = margin;

        return styleObject;
    }, [width, margin]);

    // prettier-ignore
    const sidebarClasses = `${iconBarStyles.iconBar} ${iconBarStyles[`${orientation}`]} ${styles.container}`;
    const drawerClasses = `${drawerStyles.drawerSection} ${drawerStyles.socialSection}`;

    if (switchState) {
        return (
            <HeroAnimation orientation={orientation} width="80px">
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
            <Drawer orientation={orientation} className={drawerStyles.drawer}>
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

export default SocialDrawerBar;
