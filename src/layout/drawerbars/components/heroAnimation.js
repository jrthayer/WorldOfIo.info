import { useState, useEffect, useRef } from "react";

import styles from "./heroAnimation.module.scss";

import { useScroll } from "components/providers/scrollProvider";
import { useViewport } from "components/providers/viewportProvider";

const HeroAnimation = (props) => {
    const { yOffset, scrollHeight } = useScroll();
    const { height } = useViewport();
    // Static Value is bad practice
    const footerHeight = 100;
    const [classes, setClasses] = useState(
        `${styles.onHero} ${styles[`hide-${props.orientation}`]}`
    );

    const initialRender = useRef(true);

    useEffect(() => {
        setTimeout(() => {
            setClasses(styles.onHero);
        }, 300);
    }, []);

    useEffect(() => {
        console.log(
            `yOffset: ${yOffset}, scrollHeight: ${scrollHeight}, height: ${height}`
        );
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
        <div className={`${styles.container} ${props.orientation} ${classes}`}>
            {props.children}
        </div>
    );
};

export default HeroAnimation;
