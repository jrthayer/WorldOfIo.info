import React, { Fragment, useEffect } from "react";

import "../styles/pages/home.scss";

import logo from "../images/IO-Logo.png";
import backgroundImage from "../images/galaxy_2.jpg";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";

import StatCard from "../components/statCard";
import IconPanel from "../components/iconPanel";

import links from "../data/links.js";

import Hero from "../components/hero";
import Section from "../components/section";
import Footer from "../components/footer";

let introLink = links.find((link) => link.name === "Intro Video");

let navigationData = [
    {
        name: "Top Of Page",
        link: "#hero",
    },
    {
        name: "About IO",
        link: "#aboutIO",
    },
    {
        name: "History Of IO",
        link: "#historyOfIO",
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

import socialData from "../data/social.js";

const Home = (props) => {
    useEffect(() => {
        document.title = "World Of IO";
    }, []);

    return (
        <Fragment>
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
                drawer={["uppercase"]}
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

            <Hero id="hero" background={backgroundImage}>
                <h1 className="fs-700 color-white shadow-text">World Of IO</h1>
                <img src={logo} alt="" />
                <SocialBtn
                    link={introLink.link}
                    classes_text={`${introLink.classes_text} fs-400`}
                    name={introLink.name}
                    key={introLink.name}
                ></SocialBtn>
            </Hero>
            <Section id="aboutIO">
                <h2 className="fs-700">About IO</h2>
                <p className="color-primary-dark">
                    World of IO is a a homebrew D&D setting made by BrettUltimus
                    that has been developing for over 2 years now. The world is
                    heavily influenced by the player's action shaping the
                </p>
                <div className="stat-group">
                    <StatCard stat="Hours Of Content" value={660}>
                        Spanning across 245 videos with an average length of{" "}
                        <span>2 hours 40 mins</span>
                    </StatCard>

                    <StatCard stat="Player Characters" value={90} symbol="+">
                        {/* + */}
                        Across 71 unique players!
                    </StatCard>

                    <StatCard stat="Campaigns" value={16}>
                        With 8 one shots/special events including 2 major boss
                        fights that spanned over 9 hours with 3 separate
                        parties!
                    </StatCard>

                    <StatCard stat="Diverse Regions" value={12} symbol="+">
                        {/* + */}
                        Ranging from the wide open seas to the Astral plane
                        itself!
                    </StatCard>
                </div>
            </Section>
            <Section
                id="historyOfIO"
                bgType="color"
                bgData="var(--color-primary-light)"
            >
                <h2 className="fs-700 color-white shadow-text-outline">
                    The History Of IO
                </h2>

                <h3>Phase 1</h3>
                <p>
                    Phase 1 was completely offline and featured two groups
                    playing in different parts of the same world.
                </p>
                <h3>Phase 2</h3>
                <p>
                    Phase 1 was completely offline and featured two groups
                    playing in different parts of the same world.
                </p>
            </Section>
            {/* bgType="image" bgData={backgroundImage} */}
            <Section id="howToSupport">
                <h2 className="fs-700">How To Support The World of IO</h2>
                <div className="support-group">
                    <IconPanel
                        data={socialData.find((obj) => obj.name === "Patreon")}
                    >
                        <p>
                            Not only does brett get the largest cut from patreon
                            but you get the most bang for your buck.
                        </p>
                        <br />
                        <p>
                            Patreon members get many exclusive features
                            including:
                        </p>
                        <ul>
                            <li>Session MP3s</li>
                            <li>DM Notes</li>
                            <li>Sneak Peaks</li>
                        </ul>
                    </IconPanel>
                    <IconPanel
                        data={socialData.find((obj) => obj.name === "Merch")}
                    >
                        <p>Purchase merch of the wholesome Racc himself.</p>
                        <br />
                        <p>
                            Currently the main focus of the merchandise is a dnd
                            class series that so far includes fighter and
                            wizard.
                        </p>
                    </IconPanel>
                    <IconPanel
                        data={socialData.find((obj) => obj.name === "Twitch")}
                    >
                        <p>
                            Watch the sessions live on twitch! Subscribe,
                            donate, and participate in the chat.
                        </p>
                        <br />
                        <p>Weekly stream times can be found in the discord!</p>
                    </IconPanel>
                    <IconPanel
                        data={socialData.find((obj) => obj.name === "YouTube")}
                    >
                        <p>
                            Watching the previous campaigns on the youtube
                            channel provides ad revenue and helps spread IO to
                            new viewers.
                        </p>
                        <br />
                        <p>
                            A master playlist containing all 245 sessions of
                            Phase 2 is available for your convenience!
                        </p>
                    </IconPanel>
                    <IconPanel
                        data={socialData.find((obj) => obj.name === "Discord")}
                    >
                        <p>Join and interact with the amazing discord!</p>
                        <br />
                        <p>
                            Whether you're looking for campaign fanart, a bingo
                            board to fill out during the game, or just a place
                            to talk about all things IO you can find it here!
                        </p>
                    </IconPanel>
                </div>
            </Section>
            <Footer
                // className="color-white"
                style={{ backgroundColor: `var(--color-primary-light)` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
