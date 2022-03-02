import { useEffect, useState } from "react";

import styles from "./countdown.module.scss";

import CountdownDisplay from "./countdownDisplay";

import determineNextEvent from "pages/home/utils/determineNextEvent";
// import initialImage from "/public/images/default.png";

const Countdown = (props) => {
    const [nextEvent, setNextEvent] = useState(true);
    const [event, setEvent] = useState({
        minutesTill: 0,
        name: "Loading Content",
    });
    const [imgSrc, setImgSrc] = useState();
    const [hideTitle, setHideTitle] = useState(true);

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
            setEvent(determineNextEvent(props.data));
        }
    }, [nextEvent]);

    useEffect(() => {
        let fileName = event.name.replace(/ /g, "_");
        fileName = fileName.toLowerCase();
        setImgSrc(`/image/${fileName}.png`);
        setNextEvent(false);
    }, [event]);

    useEffect(() => {
        setHideTitle(true);
    }, [imgSrc]);

    return (
        <div className={styles.container}>
            <h2 className={`fs-650 ${styles.nextShow}`}>Next Show</h2>
            <div className={styles.imgContainer}>
                {hideTitle ? null : (
                    <h3 className={`${styles.header}`}>{event.name}</h3>
                )}

                <img
                    src={imgSrc}
                    className={styles.image}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        console.error("Not a valid countdown image");
                        currentTarget.src = "/image/default.png";
                        setHideTitle(false);
                    }}
                ></img>
            </div>

            <CountdownDisplay data={event} nextEvent={setNextEvent} />
        </div>
    );
};

export default Countdown;
