import { Fragment } from "react";

//hooks
import useHashLinkOnStart from "hooks/useHashLinkOnStart";

//====== Layout Components
//local
import HeroSection from "./layout/heroSection";
import SupportSection from "./layout/supportSection";

// shared
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
        text: "Support",
        link: "#howToSupport",
    },
];

import socialData from "data/social.js";

//images
import backgroundImage from "images/ioverse-background.png";

const Home = () => {
    // useHashLinkOnStart();

    return (
        <Fragment>
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
            <SupportSection id="howToSupport" />
            {/* { backgroundColor: `var(--color-primary-light)` } */}
            <Footer
                style={{ backgroundImage: `url(${backgroundImage})` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
