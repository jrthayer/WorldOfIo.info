import React from "react";
import { useEffect, Fragment } from "react";

//====== Layout Components
// shared
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";
import NavBar from "layout/navBar/navBar";
import Screen from "components/screen";
// local
import FeedFormSection from "./layout/feedFormSection";

//hooks
import useSetBackground from "hooks/useSetBackground";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//images
import backgroundImage from "images/ioverse-background.webp";

function Rss() {
    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 48, 60);

    //Set tab title
    useEffect(() => {
        document.title = "MP3s";
    }, []);

    return (
        <Fragment>
            <NavBar />

            <SocialDrawerBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                width="225px"
                orientation="left"
                type="transparent"
            ></SocialDrawerBar>
            <Screen />
            <FeedFormSection />
        </Fragment>
    );
}

export default Rss;
