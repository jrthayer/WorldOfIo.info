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

import SwitchComponents from "components/switchComponents";
import LinkDrawer from "./components/linkDrawer";

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
            {/* <ResponsiveSidebar
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
            </ResponsiveSidebar> */}
            {/* <ResponsiveSidebar
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
            </ResponsiveSidebar> */}
            <SwitchComponents
                object1={<div>This is object 1</div>}
                object2={
                    <LinkDrawer
                        header="Social Links"
                        orientation="left"
                        data={socialData}
                    />
                }
                mediaQuery="(min-width: 700px) and (min-height: 700px)"
            ></SwitchComponents>
            <SwitchComponents
                object1={<div>This is object 1</div>}
                object2={
                    <LinkDrawer
                        header="Navigation Links"
                        orientation="right"
                        data={navigationData}
                        samePage
                    />
                }
                mediaQuery="(min-width: 700px) and (min-height: 700px)"
            ></SwitchComponents>

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
