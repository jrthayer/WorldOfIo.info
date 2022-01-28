import React, { useState, useMemo } from "react";

import "../styles/statCard.scss";

import { InView } from "react-intersection-observer";
import { useEffect } from "react/cjs/react.development";

function setStartValue(value) {
    let startValue = value - 10;
    if (startValue < 0) startValue = 0;
    return startValue;
}

const StatCard = (props) => {
    const [value, setValue] = useState(setStartValue(props.value));
    const [symbol, setSymbol] = useState("");
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        let intervalID = null;
        if (animating) {
            intervalID = setInterval(() => {
                // console.log(`value: ${value}, props:${props.value}`);
                if (value === props.value) {
                    clearInterval(intervalID);
                    setSymbol(props.symbol !== undefined && props.symbol);
                } else {
                    setValue((prev) => prev + 1);
                }
            }, 100);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [animating, value]);

    return (
        <InView
            as="div"
            className="statCard"
            onChange={(inView, entry) => (inView ? setAnimating(true) : null)}
            triggerOnce={true}
        >
            <div className="statCard-header fs-700">{value + symbol}</div>
            <div className="statCard-text">
                <h3>{props.stat}</h3>
                <p className="color-primary-dark">{props.children}</p>
            </div>
        </InView>
    );
};

export default StatCard;
