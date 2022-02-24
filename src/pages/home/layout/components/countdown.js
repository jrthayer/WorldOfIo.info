import { useEffect, useState } from "react";

import styles from "./countdown.module.scss";

import CountdownDisplay from "./countdownDisplay";

import determineNextEvent from "pages/home/utils/determineNextEvent";
import testImage from "images/theArcaneAcademy.jpg";

const Countdown = (props) => {
    const [nextEvent, setNextEvent] = useState(true);
    const [event, setEvent] = useState({ minutesTill: 0 });

    const onFocus = () => {
        setNextEvent(true);
    };

    useEffect(() => {
        window.addEventListener("focus", onFocus);

        return () => {
            window.removeEventListener("focus", onFocus);
        };
    }, []);

    useEffect(() => {
        if (nextEvent === true) {
            // determine next show
            const event = determineNextEvent(props.data);
            setEvent(determineNextEvent(props.data));
            setNextEvent(false);
        }
    }, [nextEvent]);

    return (
        <div className={styles.container}>
            <h2 className={`fs-650 ${styles.nextShow}`}>Next Show</h2>
            <h3 className={`fs-600 ${styles.header}`}>{event.name}</h3>
            <img src={testImage} className={styles.image}></img>
            <CountdownDisplay
                data={event.minutesTill}
                nextEvent={setNextEvent}
            />
        </div>
    );
};

export default Countdown;
