import React, { useState, useEffect } from "react";

import styles from "./statCard.module.scss";

import { InView } from "react-intersection-observer";

function setStartValue(value) {
    let startValue = value - 15;
    if (startValue < 0) startValue = 0;
    return startValue;
}

const StatCard = (props) => {
    function example(props) {
        const [value, setValue] = useState(setStartValue(props.value));
        const [symbol, setSymbol] = useState("");
        const [animating, setAnimating] = useState(false);

        useEffect(() => {
            if (animating) {
                if (value === props.value) {
                    // This set symbol to prop.symbol if it is not undefined
                    setSymbol(props.symbol !== undefined && props.symbol);
                } else {
                    setTimeout(() => {
                        setValue((prev) => prev + 1);
                    }, 100);
                }
            }
        }, [animating, value]);

        return { value, animating, setAnimating, symbol };
    }

    const { value, animating, setAnimating, symbol } = example(props);

    return (
        <InView
            as="div"
            className={styles.statCard}
            onChange={(inView) => (inView ? setAnimating(true) : null)}
            // triggerOnce={true}
            threshold={0.7}
        >
            <div className={`${styles.header} fs-700`}>{value + symbol}</div>
            <div className={styles.text}>
                <h3 className={styles["text-header"]}>{props.stat}</h3>
                <p className="color-primary-dark">{props.children}</p>
            </div>
        </InView>
    );
};

export default StatCard;
