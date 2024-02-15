import React, { Fragment, useEffect } from "react";

//hooks
import useNavButtonOnStart from "hooks/useNavButtonOnStart";
import useSetBackground from "hooks/useSetBackground";

//====== Layout Components
// local
import HeroSection from "./layout/heroSection/heroSection";
import StatSection from "./layout/statSection/statSection";
import OriginSection from "./layout/originSection/originSection";
import MajorEventsSection from "./layout/majorEventsSection/majorEventsSection";

// shared
import HeroNavBar from "layout/navBar/heroNavBar";
import SocialDrawerbar from "layout/socialDrawerbar";
import Footer from "layout/footer";
import DrawerBar from "components/drawerbars/drawerBar";
import ScrollingScreen from "components/scrollingScreen";

//====== Data
// Arrays
let navigationData = [
    {
        text: "Top Of Page",
        link: "#hero",
        type: "circle",
        samePage: true,
    },
    {
        text: "Stats",
        link: "#aboutIO",
        type: "circle",
        samePage: true,
    },

    {
        text: "Origin Of IO",
        link: "#originOfIO",
        type: "circle",
        samePage: true,
    },
    {
        text: "Major Events",
        link: "#majorEvents",
        type: "circle",
        samePage: true,
    },
];

// Images
import backgroundImage from "images/galaxy_2.webp";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//====== Main Component
const Phase2 = () => {
    useNavButtonOnStart();
    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 48, 60);

    useEffect(() => {
        document.title = "Phase 2";
    }, []);

    return (
        <Fragment>
            {/* Navigation */}
            <HeroNavBar />
            <SocialDrawerbar />
            <DrawerBar
                title="Page Sections"
                data={navigationData}
                orientation="right"
                type="transparent"
                width="320px"
                margin="50px"
            ></DrawerBar>

            {/* Background */}
            <ScrollingScreen></ScrollingScreen>

            {/* Page Sections */}
            <HeroSection id="hero" />
            <StatSection id="aboutIO" />
            <OriginSection id="originOfIO" />
            <MajorEventsSection id="majorEvents" />

            <Footer id="footer"></Footer>
        </Fragment>
    );
};

export default Phase2;
