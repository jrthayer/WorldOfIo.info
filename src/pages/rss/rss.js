import React from "react";
import { useEffect, Fragment } from "react";

//hooks
import useSetBackground from "hooks/useSetBackground";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//====== Layout Components
// shared
import DrawerBar from "layout/drawerbars/drawerBar";
import NavBar from "layout/navBar/navBar";
import Screen from "components/screen";
// local
import FeedFormSection from "./layout/feedFormSection";

//====== Data
// arrays
import socialData from "data/social.js";

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

            <DrawerBar
                title="Social Links"
                data={socialData}
                type="transparent"
            ></DrawerBar>
            <Screen />
            <FeedFormSection />
        </Fragment>
    );
}

export default Rss;
