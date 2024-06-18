import React from "react";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

//====== Layout Components
// shared
import Section from "components/containers/section";

// local
import Feed from "./feed/feed";
import Form from "./form/form";

// RSS Testing
import { default as showsImportedData } from "data/showsList";
import { default as showsPlaylistData } from "data/playlists";
import { default as exceptionsList } from "data/exceptionsList";

import { parseRss, generateShowsMap } from "pages/rss/utils/parseRSS";

// end testing

import { convertArray } from "pages/rss/utils/parseRSS";

function FeedFormSection() {
    //Key States
    const [key, setKey] = useState("");
    //Form States
    const [errorMessage, setErrorMessage] = useState("");
    const [saveState, setSaveState] = useState(false);
    //Feed States
    const [data, setData] = useState(null);
    const [showsArray, setShowsArray] = useState(null);

    //Load key if stored in localStorage
    useEffect(() => {
        let localKey = localStorage.getItem("rss");

        if (localKey !== null) {
            setKey(localKey);
        }
    }, []);

    //sends request to cors proxy when key is changed
    useEffect(() => {
        //check for empty key
        if (key === "") {
            return;
        }

        axios(`https://cors-proxy-gules.vercel.app/api/patreon?url=${key}`)
            .then((response) => {
                // prettier-ignore
                if (!response.data.hasOwnProperty("title") || response.data.title !== "IOverse RSS Feed") {
                    // prettier-ignore
                    setErrorMessage("Invalid RSS link!");
                    return;
                }

                if (response.data.items.length === 0) {
                    // prettier-ignore
                    setErrorMessage("Your membership is no longer active. Please restart your patreon membership to get access to the MP3s");
                    return;
                }

                //save rss locally if checked
                if (saveState) {
                    localStorage.setItem("rss", key);
                }

                // const convertedArrays = convertArray(response.data.items);

                // rss testing
                let showMap = generateShowsMap(
                    showsImportedData,
                    showsPlaylistData
                );

                const convertedArrays = parseRss(
                    response.data.items,
                    showMap,
                    exceptionsList
                );

                // end testing

                setData(convertedArrays[0]);
                setShowsArray(convertedArrays[1]);
                console.log(convertedArrays);
            })
            .catch((error) => console.error(error));
    }, [key]);

    //state change handlers
    const handleKeyCleared = () => {
        localStorage.removeItem("rss");
        setKey("");
        setData(null);
    };

    const handleSaveStateChange = () => {
        setSaveState(!saveState);
    };

    const handleKeyChange = (newState) => {
        setKey(newState);
    };

    return (
        <Section features="fullscreen no-margin">
            <h1 className="header-ioverse-gradient fs-700">Ioverse MP3s</h1>
            {data && showsArray ? (
                <>
                    <button onClick={handleKeyCleared}>Remove RSS</button>

                    <Feed shows={showsArray}></Feed>
                </>
            ) : (
                <Form
                    setParentKey={handleKeyChange}
                    parentError={errorMessage}
                    saveState={saveState}
                    updateSaveState={handleSaveStateChange}
                ></Form>
            )}
        </Section>
    );
}

export default FeedFormSection;
