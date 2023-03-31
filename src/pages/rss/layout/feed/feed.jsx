import React, { useEffect, useState, useMemo, useRef } from "react";

import Session from "./components/session";
import AudioPlayer from "./components/audioPlayer";

function Feed(props) {
    const [data, setData] = useState(props.data);
    const [audioSrc, setAudioSrc] = useState("");
    const [curSessionPlaying, setCurSessionPlaying] = useState(0);
    const prevPlayedIndex = useRef(curSessionPlaying);

    function updateAudioSrc(src) {
        setAudioSrc(src);
    }

    function updateSession(index) {
        setData((prevData) => {
            // set currently playing session
            const sessionBeingUpdated = {
                ...prevData[index],
                watched: true,
                isCurSession: true,
            };

            let updatedData = [
                ...prevData.slice(0, index),
                sessionBeingUpdated,
                ...prevData.slice(index + 1),
            ];

            // edit previously playing session
            const prevSessionPlaying = {
                ...prevData[prevPlayedIndex.current],
                isCurSession: false,
            };

            updatedData = [
                ...updatedData.slice(0, prevPlayedIndex.current),
                prevSessionPlaying,
                ...updatedData.slice(prevPlayedIndex.current + 1),
            ];

            return updatedData;
        });

        setCurSessionPlaying(index);
    }

    // Needed to edit the previous played session when a new session is clicked
    useEffect(() => {
        prevPlayedIndex.current = curSessionPlaying;
    }, [curSessionPlaying]);

    return (
        <>
            <div>
                {data.map((episode, i) =>
                    React.useMemo(
                        () => (
                            <Session
                                key={episode.title}
                                index={i}
                                data={episode}
                                updateAudio={updateAudioSrc}
                                updateSession={updateSession}
                            />
                        ),
                        [episode]
                    )
                )}
                <br></br>
                {data.map((episode, i) =>
                    useMemo(
                        () => (
                            <Session
                                key={episode.title}
                                index={i}
                                data={episode}
                                updateAudio={updateAudioSrc}
                                updateSession={updateSession}
                            />
                        ),
                        [episode]
                    )
                )}
            </div>
            {audioSrc ? <AudioPlayer src={audioSrc} /> : null}
        </>
    );
}

export default Feed;
