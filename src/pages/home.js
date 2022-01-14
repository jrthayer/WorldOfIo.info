import React, { Fragment, useEffect, useState } from "react";

import logo from "../images/IO-Logo.png";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";

import socialData from "../data/social.js";
import links from "../data/links.js";

let introLink = links.find((link) => link.name === "Intro Video");

const Home = (props) => {
    return (
        <Fragment>
            <ResponsiveSidebar
                orientation="right"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3>Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>
            <ResponsiveSidebar
                orientation="left"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3>Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>
            <div className="hero">
                <h1>The World Of IO</h1>
                <img src={logo} alt="" />
                <SocialBtn
                    color={introLink.color}
                    link={introLink.link}
                    classes={introLink.classes}
                    name={introLink.name}
                    key={introLink.name}
                ></SocialBtn>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="var(-color100)"
                        fillOpacity="1"
                        d="M0,320L120,320C240,320,480,320,720,298.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg> */}
            </div>
            <div className="container">
                <section>
                    <h2>History Of IO</h2>
                    <p>
                        <a
                            href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            This project
                        </a>{" "}
                        was bootstrapped with{" "}
                        <a href="https://facebook.github.io/create-react-app/">
                            Create React App
                        </a>{" "}
                        and contains three directories, <code>/public</code> for
                        static assets, <code>/src</code> for components and
                        content, and <code>/api</code> which contains a
                        serverless <a href="https://golang.org/">Go</a>{" "}
                        function. See{" "}
                        <a href="/api/date">
                            <code>api/date</code> for the Date API with Go
                        </a>
                        .
                    </p>
                    <p>
                        <a
                            href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            This project
                        </a>{" "}
                        was bootstrapped with{" "}
                        <a href="https://facebook.github.io/create-react-app/">
                            Create React App
                        </a>{" "}
                        and contains three directories, <code>/public</code> for
                        static assets, <code>/src</code> for components and
                        content, and <code>/api</code> which contains a
                        serverless <a href="https://golang.org/">Go</a>{" "}
                        function. See{" "}
                        <a href="/api/date">
                            <code>api/date</code> for the Date API with Go
                        </a>
                        .
                    </p>
                    <p>
                        <a
                            href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            This project
                        </a>{" "}
                        was bootstrapped with{" "}
                        <a href="https://facebook.github.io/create-react-app/">
                            Create React App
                        </a>{" "}
                        and contains three directories, <code>/public</code> for
                        static assets, <code>/src</code> for components and
                        content, and <code>/api</code> which contains a
                        serverless <a href="https://golang.org/">Go</a>{" "}
                        function. See{" "}
                        <a href="/api/date">
                            <code>api/date</code> for the Date API with Go
                        </a>
                        .
                    </p>
                    <p>
                        <a
                            href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            This project
                        </a>{" "}
                        was bootstrapped with{" "}
                        <a href="https://facebook.github.io/create-react-app/">
                            Create React App
                        </a>{" "}
                        and contains three directories, <code>/public</code> for
                        static assets, <code>/src</code> for components and
                        content, and <code>/api</code> which contains a
                        serverless <a href="https://golang.org/">Go</a>{" "}
                        function. See{" "}
                        <a href="/api/date">
                            <code>api/date</code> for the Date API with Go
                        </a>
                        .
                    </p>
                    <p>
                        <a
                            href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            This project
                        </a>{" "}
                        was bootstrapped with{" "}
                        <a href="https://facebook.github.io/create-react-app/">
                            Create React App
                        </a>{" "}
                        and contains three directories, <code>/public</code> for
                        static assets, <code>/src</code> for components and
                        content, and <code>/api</code> which contains a
                        serverless <a href="https://golang.org/">Go</a>{" "}
                        function. See{" "}
                        <a href="/api/date">
                            <code>api/date</code> for the Date API with Go
                        </a>
                        .
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
