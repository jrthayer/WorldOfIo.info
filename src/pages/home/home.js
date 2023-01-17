import { Fragment } from "react";
import { useEffect } from "react";

//hooks
import useHashLinkOnStart from "hooks/useHashLinkOnStart";
import useSetBodyBackground from "hooks/useSetBodyBackground";

//====== Layout Components
//local
import HeroSection from "./layout/heroSection/heroSection";
import ScheduleSection from "./layout/scheduleSection/scheduleSection";
import NewsSection from "./layout/newsSection/newsSection";
import SupportSection from "./layout/supportSection";

// shared
import HeroNavBar from "layout/navBar/heroNavBar";
import Footer from "layout/footer";
import NavigationBar from "layout/drawerbars/navigationDrawerBar";
import SocialDrawerBar from "layout/drawerbars/socialDrawerBar";
import ScrollingScreen from "components/scrollingScreen";

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
    useSetBodyBackground(backgroundImage);

    useEffect(() => {
        document.title = "World Of IO";
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

            <ScrollingScreen></ScrollingScreen>

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
