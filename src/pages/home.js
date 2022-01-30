import React, { Fragment, useEffect } from "react";

import "../styles/pages/home.scss";

import logo from "../images/IO-Logo.png";
import backgroundImage from "../images/galaxy_2.jpg";
import testImage from "../images/theArcaneAcademy.jpg";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";

import StatCard from "../components/statCard";
import IconPanel from "../components/iconPanel";

import links from "../data/links.js";

import Hero from "../components/hero";
import Section from "../components/section";
import Footer from "../components/footer";

let phase2Intro = links.find((link) => link.name === "Intro Video");

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
        name: "Summary",
        link: "#historyOfIO",
    },
    // {
    //     name: "Campaigns",
    //     link: "#campaigns",
    // },
    // {
    //     name: "How To Support",
    //     link: "#howToSupport",
    // },
    // {
    //     name: "Footer",
    //     link: "#footer",
    // },
];

import socialData from "../data/social.js";

const Home = () => {
    useEffect(() => {
        document.title = "Phase 2";
    }, []);

    return (
        <Fragment>
            <nav></nav>
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
                drawer={["uppercase", "icons-none"]}
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
                <h1 className="fs-700 color-white shadow-text">Phase 2</h1>
                <img src={logo} alt="" />
                <SocialBtn
                    link={phase2Intro.link}
                    classes_text={`${phase2Intro.classes_text} fs-400`}
                    name={phase2Intro.name}
                    key={phase2Intro.name}
                ></SocialBtn>
            </Hero>
            <Section id="aboutIO" className="">
                <h2 className="fs-700">Phase 2 Stats</h2>
                <p className="color-primary-dark">
                    World of IO phase 2 lasted a little over a year and a half,
                    below are some interesting stats of the events that occurred
                    during this time frame:
                </p>
                <div className="stat-group">
                    <StatCard stat="Hours Of Content" value={660}>
                        Spanning across 245 videos with an average length of{" "}
                        <span>2 hours 40 mins</span>
                    </StatCard>

                    <StatCard stat="Player Characters" value={70} symbol="+">
                        {/* + */}
                        Across 50+ unique players!
                    </StatCard>

                    <StatCard stat="Campaigns" value={16}>
                        With the average number of sessions being 15 and the
                        most sessions for a single campaign being 64, which was
                        The Miss Demeanor!
                    </StatCard>

                    <StatCard
                        stat="Diverse Regions Explored"
                        value={10}
                        symbol="+"
                    >
                        {/* + */}
                        Ranging from the wide open seas to the Astral plane
                        itself!
                    </StatCard>

                    <StatCard stat="Players Ascended To Godhood" value={4}>
                        Starting as mere adventures their adventures in phase 2
                        lead them to this role.
                    </StatCard>

                    <StatCard stat="Major Boss Events" value={2}>
                        Each of which spanned over 9 hours and involved 3
                        separate parties working in stages!
                    </StatCard>

                    <StatCard stat="Amazing DM" value={1}>
                        Who supported the players in telling the story they
                        wanted and brought us this amazing world!
                    </StatCard>
                </div>
            </Section>
            <Section
                id="historyOfIO"
                bgType="color"
                bgData="var(--color-primary-light)"
            >
                <h2 className="fs-700 color-white shadow-text-outline">
                    A Brief Summary Of Phase 2
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
            {/* <Section id="howToSupport">
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
            </Section> */}
            <Footer
                // style={{ backgroundColor: `var(--color-primary-light)` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
