import React, { useState, useEffect } from "react";

import "../styles/statCard.scss";

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
            // let intervalID = null;

            if (animating) {
                if (value === props.value) {
                    // This set symbol to prop.symbol if it is not undefined
                    setSymbol(props.symbol !== undefined && props.symbol);
                } else {
                    setTimeout(() => {
                        setValue((prev) => prev + 1);
                    }, 100);
                }

                // intervalID = setInterval(() => {
                //     if (value === props.value) {
                //         clearInterval(intervalID);
                //         setSymbol(props.symbol !== undefined && props.symbol);
                //     } else {
                //         setValue((prev) => prev + 1);
                //     }
                // }, 100);
            }

            // return () => {
            //     clearInterval(intervalID);
            // };
        }, [animating, value]);

        return { value, animating, setAnimating, symbol };
    }

    const { value, animating, setAnimating, symbol } = example(props);

    return (
        <InView
            as="div"
            className="statCard"
            onChange={(inView) => (inView ? setAnimating(true) : null)}
            // triggerOnce={true}
            threshold={0.7}
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
