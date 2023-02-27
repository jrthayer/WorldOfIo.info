import { useEffect, useState } from "react";

import styles from "./countdown.module.scss";

import CountdownDisplay from "./countdownDisplay";

import determineNextEvent from "pages/home/utils/determineNextEvent";

const Countdown = (props) => {
    const [nextEvent, setNextEvent] = useState(true);
    const [event, setEvent] = useState({
        minutesTill: 0,
        name: "Loading Content",
    });
    const [noEvents, setNoEvents] = useState(false);
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

    /* Setting the image source based on the event name. */
    useEffect(() => {
        //Return if there are no events this week
        if (event === false) {
            setNoEvents(true);
            return;
        }

        let fileName = event.name.replace(/ /g, "_");
        fileName = fileName.replace(/'/, "");
        fileName = fileName.toLowerCase();
        setImgSrc(`/image/${fileName}.webp`);
        setNextEvent(false);
    }, [event]);

    useEffect(() => {
        setHideTitle(true);
    }, [imgSrc]);

    return (
        <div className={styles.container}>
            {/* Check for no events this week */}
            {noEvents ? null : (
                <>
                    <h2 className={`fs-650 header-ioverse`}>Next Show</h2>
                    <div className={styles.imgContainer}>
                        {hideTitle ? null : (
                            <div className={`${styles.headerContainer}`}>
                                <h3 className={`${styles.header}`}>
                                    {event.name}
                                </h3>
                            </div>
                        )}

                        <img
                            src={imgSrc}
                            className={styles.image}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                console.error("Not a valid countdown image");
                                currentTarget.src = "/image/default.webp";
                                setHideTitle(false);
                            }}
                        ></img>
                    </div>
                    <CountdownDisplay data={event} nextEvent={setNextEvent} />
                </>
            )}
        </div>
    );
};

export default Countdown;
