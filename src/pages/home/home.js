import React, { Fragment, useEffect } from "react";

import HeroSection from "./components/sections/heroSection";
import StatSection from "./components/sections/statSection";
import OriginSection from "./components/sections/originSection";
import MajorEventsSection from "./components/sections/majorEventsSection";
import SupportSection from "./components/sections/supportSection";
import Footer from "components/footer";

import ResponsiveSidebar from "components/responsiveSidebar";

import SocialLinks from "components/socialLinks";

let navigationData = [
    {
        name: "Top Of Page",
        link: "#hero",
    },
    {
        name: "Stats",
        link: "#aboutIO",
    },

    {
        name: "Origin Of IO",
        link: "#originOfIO",
    },
    {
        name: "Major Events",
        link: "#majorEvents",
    },
    {
        name: "How To Support",
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
            {/* <nav></nav> */}
            {/* {
                mediaQuery? (<div></div>) : (<p></p>)
            } */}
            <ResponsiveSidebar
                orientation="left"
                drawer={["uppercase"]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Social Links</h3>
                <SocialLinks
                    data={socialData}
                    width={"260px"}
                    classes_button="socialBtn-inverse margin-small"
                ></SocialLinks>
            </ResponsiveSidebar>
            <ResponsiveSidebar
                orientation="right"
                drawer={["uppercase", "icons-none", "centered"]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Navigation Links</h3>
                <SocialLinks
                    data={navigationData}
                    samePage={true}
                    width={"400px"}
                    classes_button={
                        "socialBtn-iconOnly socialBtn-inverse-hover margin-medium"
                    }
                    classes_text={"fas fa-dot-circle fa-2x"}
                ></SocialLinks>
            </ResponsiveSidebar>

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
