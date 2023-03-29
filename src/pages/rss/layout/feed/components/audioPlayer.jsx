import React from "react";

import { useState, useEffect } from "react";

import styles from "./audioPlayer.module.scss";
import ReactHowler from "react-howler";

function AudioPlayer({ src }) {
    const [audioLink, setAudioLink] = useState(src);
    const [playState, setPlayState] = useState(false);
    const [fontClasses, setFontClasses] = useState("fas fa-play fa-3x");

    function handlePlayClick() {
        let state = !playState;
        setPlayState(state);
        //prettier-ignore
        state ? setFontClasses('fas fa-pause fa-3x') : setFontClasses('fas fa-play fa-3x');
    }

    useEffect(() => {
        setPlayState(true);
        setAudioLink(src);
        setFontClasses("fas fa-pause fa-3x");
    }, [src]);

    return (
        <div className={styles.container}>
            <ReactHowler src={audioLink} playing={playState} html5 />
            <div className={styles.progressBar}>
                <div>00:00:00</div>
                <div>Title Goes here</div>
                <div>12:00:00</div>
            </div>
            <div className={styles.controls}>
                <i className="fas fa-step-backward fa-2x" />
                <i className="fas fa-backward fa-2x" />
                <i className={fontClasses} onClick={handlePlayClick} />
                <i className="fas fa-forward fa-2x" />
                <i className="fas fa-step-forward fa-2x" />
            </div>
        </div>
    );
}

export default AudioPlayer;
