import React, { Fragment, useEffect } from "react";

//====== Layout Components
// local
import HeroSection from "./layout/heroSection";
import StatSection from "./layout/statSection";
import OriginSection from "./layout/originSection";
import MajorEventsSection from "./layout/majorEventsSection";
import SupportSection from "./layout/supportSection";

// shared
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
    {
        text: "How To Support",
        link: "#howToSupport",
    },
    // {
    //     name: "Footer",
    //     link: "#footer",
    // },
];

import socialData from "data/social.js";

const Home = () => {
    useEffect(() => {
        document.title = "Phase 2";
    }, []);

    return (
        <Fragment>
            <SocialDrawerBar
                mediaQuery="(min-width: 700px) and (min-height: 700px)"
                data={socialData}
                width="225px"
                orientation="left"
            ></SocialDrawerBar>
            <NavigationBar
                mediaQuery="(min-width: 700px) and (min-height: 700px)"
                data={navigationData}
                width="320px"
                margin="30px"
                orientation="right"
            ></NavigationBar>

            {/* Page Sections */}
            <HeroSection id="hero" />
            <StatSection id="aboutIO" />
            <OriginSection id="originOfIO" />
            <MajorEventsSection id="majorEvents" />
            <SupportSection id="howToSupport" />
            <Footer
                style={{ backgroundColor: `var(--color-primary-light)` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
