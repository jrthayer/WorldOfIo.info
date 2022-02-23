import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";

import styles from "./heroAnimation.module.scss";

import { useScroll } from "components/providers/scrollProvider";
import { useViewport } from "components/providers/viewportProvider";

import useCheckNull from "hooks/useCheckNull";

const HeroAnimation = (props) => {
    const { yOffset, scrollHeight } = useScroll();
    const { height } = useViewport();
    // Static Value is bad practice
    const footerHeight = 100;
    const zIndex = useCheckNull(props.zIndex);

    const [classes, setClasses] = useState(
        `${styles.onHero} ${styles[`hide-${props.orientation}`]}`
    );
    const initialRender = useRef(true);

    const widthProp = useCheckNull(props.width);
    const heightProp = useCheckNull(props.height);

    const inlineStyles = useMemo(() => {
        let styleObject = {};

        styleObject["--width"] = widthProp;
        styleObject["--height"] = heightProp;
        // Needed to keep navBar above sidebars
        styleObject["zIndex"] = zIndex;

        return styleObject;
    }, [widthProp, heightProp]);

    useEffect(() => {
        setClasses(styles.onHero);

        if (yOffset > height - 50) {
            setClasses();
        }
    }, []);

    useLayoutEffect(() => {
        //Skip first render
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            let extraClasses = "";

            // Hide between 1 and screen height
            if (yOffset < height - 50) {
                extraClasses += `${styles.onHero}`;
                if (yOffset > 0) {
                    extraClasses += ` ${styles[`hide-${props.orientation}`]}`;
                }
            }

            // Hide sidebars at footer
            if (yOffset >= scrollHeight - (height + footerHeight - 1)) {
                extraClasses += styles[`hide-${props.orientation}`];
            }

            setClasses(`${extraClasses}`);
        }
    }, [yOffset, height]);

    return (
        <div
            className={`${styles.container} ${props.orientation} ${classes}`}
            style={inlineStyles}
        >
            {props.children}
        </div>
    );
};

export default HeroAnimation;
