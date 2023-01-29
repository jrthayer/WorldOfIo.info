import React from "react";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

//components
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";
import NavBar from "layout/navBar/navBar";
import Section from "components/containers/section";

import Feed from "./components/feed";
import Form from "./components/form";

//hooks
import useSetBackground from "hooks/useSetBackground";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//images
import backgroundImage from "images/ioverse-background.webp";

function Rss() {
    //Key States
    const [validKey, setValidKey] = useState(false);
    const [key, setKey] = useState("");
    //Form States
    const [errorMessage, setErrorMessage] = useState("");
    const [saveState, setSaveState] = useState(true);
    //Feed States
    const [data, setData] = useState("");

    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 48, 60);

    //Set tab title
    useEffect(() => {
        document.title = "RSS Feed";
    }, []);

    //Load key if stored in localStorage
    useEffect(() => {
        let data = localStorage.getItem("rss");

        if (data !== null) {
            setKey(data);
        }
    }, []);

    //sends request to cors proxy when key is changed
    useEffect(() => {
        //check for empty key
        if (key === "") {
            setValidKey(false);
            return;
        }

        axios(`https://cors-proxy-gules.vercel.app/api/patreon?url=${key}`)
            .then((response) => {
                // prettier-ignore
                if (!response.data.hasOwnProperty("title") || response.data.title !== "IOverse RSS Feed") {
                    // prettier-ignore
                    setErrorMessage("Invalid RSS link! Please make sure your subscription is active!");
                    setValidKey(false);
                    return;
                }

                setValidKey(true);
                setData(response.data);

                //save rss locally if checked
                if (saveState) {
                    localStorage.setItem("rss", key);
                }
            })
            .catch((error) => console.error(error));
    }, [key]);

    //state change handlers
    const handleKeyCleared = () => {
        localStorage.removeItem("rss");
        setKey("");
        keyState(false);
    };

    const handleSaveStateChange = () => {
        setSaveState(!saveState);
    };

    const handleKeyChange = (newState) => {
        setKey(newState);
    };

    return (
        <Fragment>
            <NavBar />

            <SocialDrawerBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                width="225px"
                orientation="left"
                type="transparent"
            ></SocialDrawerBar>
            <Section features="fullscreen">
                {validKey ? (
                    <>
                        <button onClick={handleKeyCleared}>Remove RSS</button>
                        <Feed data={data}></Feed>
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
        </Fragment>
    );
}

export default Rss;
