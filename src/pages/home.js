import React, { Fragment, useEffect } from "react";

import logo from "../images/IO-Logo.png";
import backgroundImage from "../images/galaxy_2.jpg";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";
import links from "../data/links.js";
import Hero from "../components/hero";

let introLink = links.find((link) => link.name === "Intro Video");

const Home = (props) => {
    useEffect(() => {
        document.title = "World Of IO";
    }, []);

    return (
        <Fragment>
            <ResponsiveSidebar
                orientation="left"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>
            <ResponsiveSidebar
                orientation="right"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>

            <Hero background={backgroundImage}>
                <h1 className="fs-700 color-white">World Of IO</h1>
                <img src={logo} alt="" />
                <SocialBtn
                    link={introLink.link}
                    classes={`${introLink.classes} fs-400`}
                    name={introLink.name}
                    key={introLink.name}
                ></SocialBtn>
            </Hero>
            <div className="container">
                <section>
                    <SocialBtn
                        link={introLink.link}
                        classes={`${introLink.classes} fs-400`}
                        name={introLink.name}
                        key={introLink.name}
                    ></SocialBtn>
                    <h2>History Of IO</h2>
                </section>
                <section>
                    <h2>The date according to Go is:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perferendis laborum quasi temporibus obcaecati
                        doloremque! Temporibus possimus ut animi voluptatibus
                        minus nobis quisquam voluptatem vero repellat.
                        Consequuntur alias deleniti neque reprehenderit? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloremque incidunt iure atque labore quia in quod aut
                        sed ad voluptatum, facilis corporis magnam fuga
                        asperiores ipsum eveniet autem eum tempore. Dolorem
                        optio quas nisi enim blanditiis at, aut quasi doloribus
                        odio esse adipisci. Corrupti excepturi error dolores
                        harum suscipit quae sequi fugiat dolor quos cum?
                        Cupiditate possimus ipsum eos voluptatem? Impedit
                        nostrum qui fugit reiciendis perspiciatis quo hic
                        repellat blanditiis provident praesentium quam, at modi
                        porro perferendis reprehenderit quidem maiores pariatur
                        voluptatibus laboriosam deleniti placeat quos ex. Illo,
                        eaque quos.
                    </p>
                </section>
                <section>
                    <h2>The date according to Go is:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perferendis laborum quasi temporibus obcaecati
                        doloremque! Temporibus possimus ut animi voluptatibus
                        minus nobis quisquam voluptatem vero repellat.
                        Consequuntur alias deleniti neque reprehenderit? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloremque incidunt iure atque labore quia in quod aut
                        sed ad voluptatum, facilis corporis magnam fuga
                        asperiores ipsum eveniet autem eum tempore. Dolorem
                        optio quas nisi enim blanditiis at, aut quasi doloribus
                        odio esse adipisci. Corrupti excepturi error dolores
                        harum suscipit quae sequi fugiat dolor quos cum?
                        Cupiditate possimus ipsum eos voluptatem? Impedit
                        nostrum qui fugit reiciendis perspiciatis quo hic
                        repellat blanditiis provident praesentium quam, at modi
                        porro perferendis reprehenderit quidem maiores pariatur
                        voluptatibus laboriosam deleniti placeat quos ex. Illo,
                        eaque quos.
                    </p>
                </section>
                <section>
                    <h2>The date according to Go is:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perferendis laborum quasi temporibus obcaecati
                        doloremque! Temporibus possimus ut animi voluptatibus
                        minus nobis quisquam voluptatem vero repellat.
                        Consequuntur alias deleniti neque reprehenderit? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloremque incidunt iure atque labore quia in quod aut
                        sed ad voluptatum, facilis corporis magnam fuga
                        asperiores ipsum eveniet autem eum tempore. Dolorem
                        optio quas nisi enim blanditiis at, aut quasi doloribus
                        odio esse adipisci. Corrupti excepturi error dolores
                        harum suscipit quae sequi fugiat dolor quos cum?
                        Cupiditate possimus ipsum eos voluptatem? Impedit
                        nostrum qui fugit reiciendis perspiciatis quo hic
                        repellat blanditiis provident praesentium quam, at modi
                        porro perferendis reprehenderit quidem maiores pariatur
                        voluptatibus laboriosam deleniti placeat quos ex. Illo,
                        eaque quos.
                    </p>
                </section>
            </div>
        </Fragment>
    );
};

export default Home;
