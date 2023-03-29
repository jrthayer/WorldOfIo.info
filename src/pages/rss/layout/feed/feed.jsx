import React, { useEffect, useState } from "react";

import Session from "./components/session";
import AudioPlayer from "./components/audioPlayer";

function Feed(props) {
    const [data, setData] = useState(props.data.items);
    const [audioSrc, setAudioSrc] = useState("");

    function updateAudioSrc(src) {
        setAudioSrc(src);
    }

    return (
        <>
            <div>
                {data.map((episode) => (
                    <Session data={episode} updateAudio={updateAudioSrc} />
                ))}
            </div>
            {audioSrc ? <AudioPlayer src={audioSrc} /> : null}
        </>
    );
}

export default Feed;
