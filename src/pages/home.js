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
let phase2Playlist = links.find((link) => link.name === "Playlist");

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
        name: "Origin Of IO",
        link: "#originOfIO",
    },
    {
        name: "Major Events",
        link: "#majorEvents",
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
            {/* <nav></nav> */}
            {/* {
                mediaQuery? (<div></div>) : (<p></p>)
            } */}
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
            </ResponsiveSidebar>

            <Hero id="hero" background={backgroundImage}>
                <h1 className="fs-700 color-white shadow-text">Phase 2</h1>
                <img src={logo} alt="" />
                <div className="hero-links">
                    <SocialBtn
                        link={phase2Intro.link}
                        classes_text={`${phase2Intro.classes_text} fs-400`}
                        name={phase2Intro.name}
                        key={phase2Intro.name}
                    ></SocialBtn>
                    <SocialBtn
                        link={phase2Playlist.link}
                        classes_text={`${phase2Playlist.classes_text} fs-400`}
                        name={phase2Playlist.name}
                        key={phase2Playlist.name}
                    ></SocialBtn>
                </div>
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
                id="originOfIO"
                bgType="color"
                bgData="var(--color-primary-light)"
            >
                <h2 className="fs-700 color-white shadow-text-outline">
                    The Origin Of IO
                </h2>
                <h3 className="fs-200">
                    info below was copied from{" "}
                    <a href="https://worldofio.fandom.com/wiki/Io">this</a> wiki
                    page
                </h3>
                <p>
                    Io was first discovered by the inhabitants of Earth in
                    either 1609 or 1610 by a human named Galileo Galilei. It,
                    along with the three other moons of Jupiter, were the first
                    astronomical objects recorded that orbit a planet other than
                    Earth. Io was continually studied for centuries afterwards,
                    with increasingly sophisticated technological means, in
                    order to better understand its characteristics and place in
                    the universe.
                </p>
                <p>
                    Some time before the fall of Auroran Prime (Earth), Io
                    became inhabited by a population of magically gifted beings
                    known as the Astari. The Astari, under the guidance of their
                    gods Divyana and Voidranu, were able to make the moon
                    capable of supporting life, and they put in place a mystical
                    barrier to protect themselves from their enemies. At one
                    time, this would be reserved for their immortal enemy,
                    Kaasma, but the fall of Auroran Prime led to its survivors,
                    named the Aurorans, to seek a new home. Thus a war began
                    between the native Astari and the Auroran Federation.
                </p>
                <p>
                    The war carried on for a long period of time, until an
                    uneasy stalemate was reached. Becoming increasingly more
                    desperate, the technologically advanced Aurorans turned to
                    less than ethical means to give them the advantage in
                    conquering Io as their new home. To that end, they began the
                    Lagos Project. Using the captured Astari named Lagos, the
                    Aurorans sought to unlock the secrets of the Astari magics
                    through forcibly experimenting on their subject. This also
                    involved cloning the Astari multiple times and,
                    occasionally, feeding him to a machine called the Inevitable
                    to disassemble and analyze his genetic structure. The
                    Aurorans eventually learned much of the Astari's magic as a
                    result.
                </p>
                <p>
                    At one point during the stalemate the Aurorans enlisted one
                    of the Lagos clones into their military structure,
                    stationing him on Jupiter, which they had also fought the
                    Astrai for possession of. This Lagos eventually learned the
                    truth of his origins from Kaasma, the ancient enemy of his
                    people. This spurred Lagos to seek revenge on his captors
                    and the Astari that he believed had abandoned him to his
                    fate. Thus, with the aid of Kaasma, Lagos caused the planet
                    of Jupiter to undergo a catastrophic transformation turning
                    it into the Nova.
                </p>
                <p>
                    The explosion wiped out much of the Auroran Federation's
                    fleet and the entire populace of Io. The native Astari
                    people were essentially destroyed, and Io was left devoid of
                    life. The five surviving Auroran spaceships made for the now
                    uninhabited moon. Though most of their people were lost and
                    their resources spent, the remaining Aurorans continued
                    their mission, albeit with a new caveat. Rather than they
                    themselves taking the planet, they would recreate humanity
                    and let them inherit this new world as their home. They thus
                    set about their work, permanently landing their spaceships
                    and transforming them into terraforming stations to serve as
                    the primary means of facilitating their goals.
                </p>
                <p>
                    Io was terraformed using Auroran Prime as its template and
                    new settlers were artificially created. These settlers
                    included all forms of life both mundane and fantastical. But
                    the most important for the Aurorans was humanity, which now
                    consisted of several different subspecies crafted for unique
                    purposes and lifestyles. The Aurorans wanted the newly made
                    races to evolve as they had, form their own societies,
                    cultures, languages and myths. To this end, the Auroran
                    Repopulation Project included a Cultural program, which
                    instigated the creation of two godlike beings.
                </p>
                <p>
                    Using the magics learned via the Lagos Project, the Aurorans
                    created DIV, the God of Radiance, and VOID, the God of
                    Nothingness. The two gods were designed to be diametrically
                    opposed, which would lead to conflict and force humanity to
                    chose sides. The gods would grant power to their chosen and
                    humanity would wield magic as the Astari once had. The
                    Aurorans envisioned that, once they were powerful enough,
                    humanity would tire of the fetters their gods placed on
                    them, and rise up to overthrow them. Such an act would see
                    the ultimate potential of mortality realized, and the
                    repopulation of Io, as per the Aurorans' designs, would be
                    compete.
                </p>
            </Section>
            <Section id="majorEvents">
                <h2 className="fs-700">Major Events In Phase 2</h2>
                <div>
                    <h3 className="fs-500">The Kaasma Khara Fight</h3>
                    <p>
                        The diabolical infant was captured by the Eight Lagos
                        and turned into a weapon by which they would destroy Io.
                        Kaasma Khara was unleased into the Astral Veil for a
                        prolonged period of time, returning to lay waste to Io
                        after hunting down Elenora Mordove and her friends. The
                        threat of Kaasma Khara is the predominant conflict in
                        Act 2 of Phase 2 and is a central focus of the Astral
                        Academy, Goblins of Io and Miss Demeanor Campaigns.
                    </p>
                </div>
                <div>
                    <h3 className="fs-500">The Shadow Invasion</h3>
                    <p>
                        The diabolical infant was captured by the Eight Lagos
                        and turned into a weapon by which they would destroy Io.
                        Kaasma Khara was unleased into the Astral Veil for a
                        prolonged period of time, returning to lay waste to Io
                        after hunting down Elenora Mordove and her friends. The
                        threat of Kaasma Khara is the predominant conflict in
                        Act 2 of Phase 2 and is a central focus of the Astral
                        Academy, Goblins of Io and Miss Demeanor Campaigns.
                    </p>
                </div>
                <div>
                    <h3 className="fs-500">The Creation Of New Gods</h3>
                    <p>
                        The diabolical infant was captured by the Eight Lagos
                        and turned into a weapon by which they would destroy Io.
                        Kaasma Khara was unleased into the Astral Veil for a
                        prolonged period of time, returning to lay waste to Io
                        after hunting down Elenora Mordove and her friends. The
                        threat of Kaasma Khara is the predominant conflict in
                        Act 2 of Phase 2 and is a central focus of the Astral
                        Academy, Goblins of Io and Miss Demeanor Campaigns.
                    </p>
                </div>
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
                style={{ backgroundColor: `var(--color-primary-light)` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
