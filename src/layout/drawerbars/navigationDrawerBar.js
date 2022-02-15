import { useMemo } from "react";

import styles from "./navigationDrawerBar.module.scss";
import drawerStyles from "./styles/drawer.module.scss";
import iconBarStyles from "./styles/iconBar.module.scss";

import useMediaQuery from "hooks/useMediaQuery";
import useCheckNull from "hooks/useCheckNull";

import Btn from "components/buttons/btn";
import IconBtn from "components/buttons/iconBtn";
import Drawer from "components/containers/drawer";

import HeroAnimation from "layout/components/heroAnimation";

const NavigationDrawerBar = (props) => {
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

    if (switchState) {
        return (
            <HeroAnimation orientation={orientation} width="80px">
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
                orientation={orientation}
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

export default NavigationDrawerBar;
