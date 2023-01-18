import React, { useMemo, useState, useEffect } from "react";

import { useScroll } from "components/providers/scrollProvider";
import { useViewport } from "components/providers/viewportProvider";

import styles from "./scrollingScreen.module.scss";

/**
 * If the scroll height is greater than the height of the screen, the opacity is 0.5. Otherwise, the opacity is
 * the scroll height divided by the height of the page minus 0.5.
 * @param height - The height of the page.
 * @param scrollHeight - The current "height" of the page scroll.
 * @returns The current transparency value.
 */
function determineTransparency(height, scrollHeight) {
    const max = 0.5;
    let current = scrollHeight / height - (1 - max);

    if (current > max) {
        current = max;
    }

    return current;
}

function ScrollingScreen() {
    const [transparency, setTransparency] = useState(0);
    const { yOffset } = useScroll();
    const { height } = useViewport();

    useEffect(() => {
        setTransparency(determineTransparency(height, yOffset));
    }, [yOffset]);

    return (
        <div
            className={styles.screen}
            style={{ backgroundColor: `rgba(0,0,0, ${transparency})` }}
        ></div>
    );
}

export default ScrollingScreen;
