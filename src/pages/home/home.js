import { Fragment } from "react";
import { useEffect } from "react";

//hooks
import useNavButtonOnStart from "hooks/useNavButtonOnStart";
import useSetBackground from "hooks/useSetBackground";
import useSetPrimaryColor from "hooks/useSetPrimaryColor";

//====== Layout Components
//local
import HeroSection from "./layout/heroSection/heroSection";
import ScheduleSection from "./layout/scheduleSection/scheduleSection";
import NewsSection from "./layout/newsSection/newsSection";
import SupportSection from "./layout/supportSection";

// shared
import HeroNavBar from "layout/navBar/heroNavBar";
import Footer from "layout/footer";
import DrawerBar from "layout/drawerbars/drawerBar";
import ScrollingScreen from "components/scrollingScreen";

//====== Data
// arrays
import socialData from "data/social.js";
let navigationData = [
    {
        text: "Top Of Page",
        link: "#hero",
        type: "circle",
        samePage: true,
    },
    {
        text: "Schedule",
        link: "#schedule",
        type: "circle",
        samePage: true,
    },
    {
        text: "News",
        link: "#news",
        type: "circle",
        samePage: true,
    },
    {
        text: "Support",
        link: "#howToSupport",
        type: "circle",
        samePage: true,
    },
];

//images
import backgroundImage from "images/ioverse-background.webp";

//====== Main Component
const Home = () => {
    useNavButtonOnStart();
    useSetBackground(backgroundImage);
    useSetPrimaryColor(190, 43, 63);

    useEffect(() => {
        document.title = "World Of IO";
    }, []);

    return (
        <Fragment>
            {/* Navigation */}
            <HeroNavBar />
            <DrawerBar
                title="Social Links"
                data={socialData}
                type="transparent"
                width="300px"
            ></DrawerBar>
            <DrawerBar
                title="Page Sections"
                data={navigationData}
                orientation="right"
                type="transparent"
                width="300px"
                margin="50px"
            ></DrawerBar>

            {/* Background */}
            <ScrollingScreen></ScrollingScreen>

            {/* Page Sections */}
            <HeroSection id="hero"></HeroSection>
            <ScheduleSection />
            <NewsSection id="news" />
            <SupportSection id="howToSupport" />
            <Footer id="footer"></Footer>
        </Fragment>
    );
};

export default Home;
