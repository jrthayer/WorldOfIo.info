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
import Footer from "layout/footer";
import NavigationBar from "layout/drawerbars/navigationDrawerBar";
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";

//====== Data
let navigationData = [
    {
        text: "Top Of Page",
        link: "#hero",
    },
    {
        text: "Stats",
        link: "#aboutIO",
    },

    {
        text: "Origin Of IO",
        link: "#originOfIO",
    },
    {
        text: "Major Events",
        link: "#majorEvents",
    },
];

import socialData from "data/social.js";
import backgroundImage from "images/galaxy_2.webp";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

const Phase2 = () => {
    useNavButtonOnStart("#hero");
    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 48, 60);

    useEffect(() => {
        document.title = "Phase 2";
    }, []);

    return (
        <Fragment>
            <HeroNavBar />
            <SocialDrawerBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                data={socialData}
                width="225px"
                orientation="left"
                type="transparent"
            ></SocialDrawerBar>
            <NavigationBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                data={navigationData}
                width="320px"
                margin="50px"
                orientation="right"
                type="transparent"
            ></NavigationBar>

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
