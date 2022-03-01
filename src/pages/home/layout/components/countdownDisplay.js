import { useEffect, useState } from "react";

import styles from "./countdownDisplay.module.scss";

import countdownString from "pages/home/utils/minutesToCountdown.js";

const CountdownDisplay = (props) => {
    const [minutes, setMinutes] = useState(0);
    const [display, setDisplay] = useState(countdownString(0));

    // current bug if the duration between shows is the same this doesn't get updated
    useEffect(() => {
        setMinutes(props.data.minutesTill);
    }, [props.data]);

    useEffect(() => {
        console.log(`SetMinutes: ${minutes}`);
        const id = setTimeout(() => {
            const date = new Date();
            let seconds = 59 - date.getSeconds();

            if (seconds === 0) {
                setMinutes((prevState) => prevState - 1);
            }
            // check seconds
            // if zero subtract minute, setDisplay
            // else setDisplay
            setDisplay(countdownString(minutes));

            if (display === "0s") {
                props.nextEvent(true);
            }
        }, 1000);

        return () => {
            clearTimeout(id);
        };
    }, [minutes, display]);

    return <div className={`fs-700 ${styles.display}`}>{display}</div>;
};

export default CountdownDisplay;
