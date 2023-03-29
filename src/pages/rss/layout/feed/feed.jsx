import React, { useEffect, useState, useMemo } from "react";

import Session from "./components/session";
import AudioPlayer from "./components/audioPlayer";

function Feed(props) {
    const [data, setData] = useState(props.data.items);
    const [audioSrc, setAudioSrc] = useState("");

    function updateAudioSrc(src) {
        setAudioSrc(src);
    }

    function updateSession(index) {
        setData((prevData) => {
            const updatedData = prevData.map((item, i) => {
                if (index === i) {
                    return { ...item, watched: true, isCurSession: true };
                } else {
                    return { ...item, isCurSession: false };
                }
            });

            return updatedData;
        });
    }

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
