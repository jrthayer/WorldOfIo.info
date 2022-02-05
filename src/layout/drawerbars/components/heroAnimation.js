import { useState, useEffect } from "react";

import styles from "./heroAnimation.module.scss";

import { useScroll } from "components/providers/scrollProvider";
import { useViewport } from "components/providers/viewportProvider";

const HeroAnimation = (props) => {
    const { yOffset, offsetHeight } = useScroll();
    const { height } = useViewport();
    const footerHeight = 100;
    const [classes, setClasses] = useState("");

    useEffect(() => {
        let extraClasses = "";

        if (yOffset < height - 50) {
            extraClasses += `${styles.onHero}`;
            if (yOffset > 0) {
                extraClasses += ` ${styles[`hide-${props.orientation}`]}`;
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

        setClasses(`${extraClasses}`);
    }, [yOffset, height]);

    return (
        <div className={`${styles.container} ${props.orientation} ${classes}`}>
            {props.children}
        </div>
    );
};

export default HeroAnimation;
