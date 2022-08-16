import { Fragment } from "react";

//hooks
import useHashLinkOnStart from "hooks/useHashLinkOnStart";

//====== Layout Components
//local
import HeroSection from "./layout/heroSection";
import ScheduleSection from "./layout/scheduleSection";
import NewsSection from "./layout/newsSection";
import SupportSection from "./layout/supportSection";

// shared
import HeroNavBar from "layout/navBar/heroNavBar";

import Footer from "layout/footer";
import NavigationBar from "layout/drawerbars/navigationDrawerBar";
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";

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

    return (
        <Fragment>
            <HeroNavBar />

            <SocialDrawerBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                data={socialData}
                width="225px"
                orientation="left"
            ></SocialDrawerBar>
            <NavigationBar
                mediaQuery="(min-width: 1200px) and (min-height: 700px)"
                data={navigationData}
                width="320px"
                margin="50px"
                orientation="right"
            ></NavigationBar>

            <HeroSection id="heroSection"></HeroSection>
            <ScheduleSection />
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
