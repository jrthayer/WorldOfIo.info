import { Fragment } from "react";

import HeroSection from "./layout/heroSection";
import SupportSection from "./layout/supportSection";

// shared
import Footer from "layout/footer";
import NavigationBar from "layout/drawerbars/navigationDrawerBar";
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";

// data
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

const Home = () => {
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
                margin="50px"
                orientation="right"
            ></NavigationBar>

            <HeroSection></HeroSection>
            <SupportSection id="howToSupport" />
            <Footer
                style={{ backgroundColor: `var(--color-primary-light)` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
