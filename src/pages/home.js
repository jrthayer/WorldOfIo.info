import React, { Fragment, useEffect } from "react";

import "../styles/pages/home.scss";

import logo from "../images/IO-Logo.png";
import backgroundImage from "../images/galaxy_2.jpg";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";
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
                    classes_text={"far fa-circle fa-2x"}
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
                    <div className="stat-single">
                        <div className="header fs-700">660</div>
                        <div className="text">
                            <h3 className="text-header">Hours Of Content</h3>
                            <p className="color-primary-dark">
                                Spanning across 245 videos with an average
                                length of <span>2 hours 40 mins</span>
                            </p>
                        </div>
                    </div>

                    <div className="stat-single">
                        <div className="header fs-700">90+</div>
                        <div className="text">
                            <h3 className="text-header">Player Characters</h3>
                            <p>Across 71 unique players!</p>
                        </div>
                    </div>

                    <div className="stat-single">
                        <div className="header fs-700">16</div>
                        <div className="text">
                            <h3 className="text-header">Campaigns</h3>
                            <p>
                                With 8 one shots/special events including 2
                                major boss fights that spanned over 9 hours with
                                3 separate parties!
                            </p>
                        </div>
                    </div>

                    <div className="stat-single">
                        <div className="header fs-700">12+</div>
                        <div className="text">
                            <h3 className="text-header">Diverse Regions</h3>
                            <p>
                                Ranging from the wide open seas to the Astral
                                plane itself!
                            </p>
                        </div>
                    </div>
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
                    <a
                        href="https://www.patreon.com/worldofio"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="support-single">
                            <div className="icon">
                                <i
                                    class="fab fa-patreon fa-2x"
                                    style={{ color: "#f96854" }}
                                ></i>
                            </div>
                            <div className="description">
                                <h3 className="color-black">Patreon</h3>
                                <p>
                                    Not only does brett get the largest cut from
                                    patreon support but you get the most bang
                                    for your buck.
                                </p>
                                <br />
                                <p>
                                    Patreon members get many exclusive features
                                    including:
                                    <ul>
                                        <li>Session MP3s</li>
                                        <li>DM Notes</li>
                                        <li>Sneak Peaks</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </a>

                    <div className="support-single">
                        <div className="icon">
                            <i class="fas fa-shopping-cart fa-2x"></i>
                        </div>
                        <div className="description">
                            <h3 className="color-black">Merch Store</h3>
                            <p>Purchase merch of the wholesome Racc himself.</p>
                            <br />
                            <p>
                                Currently the main focus of the merchandise is a
                                dnd class series that so far includes fighter
                                and wizard.
                            </p>
                        </div>
                    </div>
                    <div className="support-single">
                        <div className="icon">
                            <i
                                class="fab fa-twitch fa-2x"
                                style={{ color: "#6441a5" }}
                            ></i>
                        </div>
                        <div className="description">
                            <h3 className="color-black">Twitch</h3>
                            <p>
                                Watch the sessions live on twitch! Subscribe,
                                donate, and participate in the chat.
                            </p>
                            <br />
                            <p>
                                Weekly stream times can be found in the discord!
                            </p>
                        </div>
                    </div>
                    <div className="support-single">
                        <div className="icon">
                            <i
                                class="fab fa-youtube fa-2x"
                                style={{ color: "#c4302b" }}
                            ></i>
                        </div>
                        <div className="description">
                            <h3 className="color-black">Youtube</h3>
                            <p>
                                Watching the previous campaigns on the youtube
                                channel provides ad revenue and helps spread IO
                                to new viewers.
                            </p>
                            <br />
                            <p>
                                A master playlist containing all 245 sessions of
                                Phase 2 is available for your convenience!
                            </p>
                        </div>
                    </div>
                    <div className="support-single">
                        <div className="icon">
                            <i
                                class="fab fa-discord fa-2x"
                                style={{ color: "#7289da" }}
                            ></i>
                        </div>
                        <div className="description">
                            <h3 className="color-black">Discord</h3>
                            <p>Join and interact with the amazing discord!</p>
                            <br />
                            <p>
                                Wether you're looking for campaign fanart, a
                                bingo board to fill out during the game, or just
                                a place to talk about all things IO you can find
                                it here!
                            </p>
                        </div>
                    </div>
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
