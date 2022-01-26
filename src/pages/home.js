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
    {
        name: "About This Site",
        link: "#whatIsThisSite",
    },
    {
        name: "Footer",
        link: "#footer",
    },
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
                <h1 className="fs-700 color-white">World Of IO</h1>
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
                <p>
                    World of IO is a a homebrew D&D setting made by BrettUltimus
                    that has been developing for over 2 years now. The world is
                    heavily influenced by the player's action shaping the
                </p>
                <div className="stat-group">
                    <div className="stat-single">
                        <div className="header fs-700">660</div>
                        <div className="text">
                            <h3 className="text-header">Hours Of Content</h3>
                            <p>
                                Spanning across 245 videos with an average
                                length of <span>2 hours 40 mins</span>
                            </p>
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
                        <div className="header fs-700">90+</div>
                        <div className="text">
                            <h3 className="text-header">Player Characters</h3>
                            <p>Across 71 unique players!</p>
                        </div>
                    </div>

                    <div className="stat-single">
                        <div className="header fs-700">3</div>
                        <div className="text">
                            <h3 className="text-header"></h3>
                        </div>
                    </div>
                    <div className="stat-single">
                        <div className="header fs-700">3</div>
                        <div className="text">
                            <h3 className="text-header"></h3>
                        </div>
                    </div>
                    <div className="stat-single">
                        <div className="header fs-700">3</div>
                        <div className="text">
                            <h3 className="text-header"></h3>
                        </div>
                    </div>
                    <div className="stat-single">
                        <div className="header fs-700">3</div>
                        <div className="text">
                            <h3 className="text-header"></h3>
                        </div>
                    </div>
                </div>
            </Section>
            <Section
                id="historyOfIO"
                bgType="color"
                bgData="var(--color-primary-light)"
            >
                <h2 className="fs-700">The History Of IO</h2>

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
                <h2>What is the World of IO?</h2>
                <p>
                    World of IO is a a homebrew D&D setting made by
                    BrettUltimus.
                </p>
            </Section>
            <Section
                id="whatIsThisSite"
                bgType="color"
                bgData="var(--color-primary-light)"
            >
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Footer
                className="color-white"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                id="footer"
            ></Footer>
        </Fragment>
    );
};

export default Home;
