import { Fragment, useEffect } from "react";

//hooks
import useHashLinkOnStart from "hooks/useHashLinkOnStart";

//====== Layout Components
//local
import HeroSection from "./layout/heroSection";
import SupportSection from "./layout/supportSection";
import NewsSection from "./layout/newsSection";

// shared
import HeroNavBar from "layout/navBar/heroNavBar";

import Footer from "layout/footer";
import NavigationBar from "layout/drawerbars/navigationDrawerBar";
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";
import Section from "components/containers/section";

//====== Data
// arrays
let navigationData = [
    {
        text: "Top Of Page",
        link: "#heroSection",
    },
    {
        text: "Schedule",
        link: "#schedule",
    },
    {
        text: "News",
        link: "#news",
    },
    {
        text: "Support",
        link: "#howToSupport",
    },
];

import socialData from "data/social.js";

//images
import backgroundImage from "images/ioverse-background.png";

const Home = () => {
    useHashLinkOnStart();

    useEffect(() => {
        document.title = "World Of IO";
    }, []);

    return (
        <Fragment>
            <HeroNavBar />

            <SocialDrawerBar
                mediaQuery="(min-width: 1100px) and (min-height: 700px)"
                data={socialData}
                width="225px"
                orientation="left"
            ></SocialDrawerBar>
            <NavigationBar
                mediaQuery="(min-width: 1100px) and (min-height: 700px)"
                data={navigationData}
                width="320px"
                margin="50px"
                orientation="right"
            ></NavigationBar>

            <HeroSection id="heroSection"></HeroSection>
            <Section id="schedule">
                <h2>Schedule Section</h2>
            </Section>
            <NewsSection id="news" />
            <SupportSection id="howToSupport" />
            <Footer
                style={{ backgroundImage: `url(${backgroundImage})` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
