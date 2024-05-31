import React, { useEffect, useState, useMemo, useRef } from "react";

import Session from "./components/session";
import AudioPlayer from "./components/audioPlayer";
import Show from "./components/show";

// rss testing
import IconBtn from "components/buttons/iconBtn";

function Feed(props) {
    const shows = props.shows;
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
                watchedState: true,
                currentShowState: true,
            };

            let updatedData = [
                ...prevData.slice(0, index),
                sessionBeingUpdated,
                ...prevData.slice(index + 1),
            ];

            // edit previously playing session
            const prevSessionPlaying = {
                ...prevData[prevPlayedIndex.current],
                currentShowState: false,
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

    function createShowObjects(showsData, data) {
        let showObjects = [];
        for (let [key, value] of shows) {
            showObjects.push(
                <Show data={value}></Show>
                // <div style={{ backgroundColor: "black", color: "white" }}>
                //     <h1>{value.title}</h1>
                //     <h3>Number of Episodes: {value.numberOfSessions}</h3>
                //     <h3>
                //         Total Length: {Math.ceil(value.duration / 86345154)} hrs
                //     </h3>
                //     {value.playlist ? (
                //         <IconBtn link={value.playlist}>Playlist</IconBtn>
                //     ) : null}

                //     <ol>{createSessionTitles(value.sessionIndexes, data)}</ol>
                // </div>
            );
        }
        return showObjects;
    }

    function createSessionTitles(sessionIndexes, data) {
        return sessionIndexes.map((sessionIndex) => {
            return <li>{data[sessionIndex].title}</li>;
        });
    }

    return (
        <>
            {shows && data ? <>{createShowObjects(shows, data)}</> : null}

            {audioSrc ? <AudioPlayer src={audioSrc} /> : null}
        </>
    );
}

export default Feed;

// shows.map((show, index) => {
//       return (
//           <>
//               <Show data={show}></Show>
//               <div
//                   style={{
//                       backgroundColor: "rgba(0,0,0,1)",
//                   }}
//               >
//                   {show.playlists.map(
//                       (playlist, i, playlistArray) => {
//                           return (
//                               <div
//                                   style={{
//                                       marginTop: "20px",
//                                   }}
//                               >
//                                   {playlistArray[
//                                       playlistArray.length -
//                                           1 -
//                                           i
//                                   ].sessions.map((dataIndex) =>
//                                       useMemo(
//                                           () => (
//                                               <Session
//                                                   key={
//                                                       data[
//                                                           dataIndex
//                                                       ].title
//                                                   }
//                                                   index={
//                                                       dataIndex
//                                                   }
//                                                   data={
//                                                       data[
//                                                           dataIndex
//                                                       ]
//                                                   }
//                                                   updateAudio={
//                                                       updateAudioSrc
//                                                   }
//                                                   updateSession={
//                                                       updateSession
//                                                   }
//                                               />
//                                           ),
//                                           [data[dataIndex]]
//                                       )
//                                   )}
//                               </div>
//                           );
//                       }
//                   )}
//               </div>
//           </>
//       );
//   })
