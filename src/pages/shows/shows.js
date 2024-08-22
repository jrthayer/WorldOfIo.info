import React from "react";
import { useEffect, Fragment } from "react";

//hooks
import useSetBackground from "hooks/useSetBackground";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//====== Layout Components
// shared
import SocialDrawerbar from "layout/socialDrawerbar";
import NavBar from "layout/navBar/navBar";
import Screen from "components/screen";
// local
import FeedFormSection from "./layout/feedFormSection";

//====== Data
//images
import backgroundImage from "images/ioverse-background.webp";

function Shows() {
    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 48, 60);

    //Set tab title
    useEffect(() => {
        document.title = "Shows";
    }, []);

    return (
        <Fragment>
            <NavBar />
            <SocialDrawerbar />
            <Screen />
            <FeedFormSection />
        </Fragment>
    );
}

export default Shows;
