import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./images/IO-Logo.png";

import SocialBtn from "./components/socialBtn";

import socialData from "./data/social.js";

function App() {
    let pageHeight = document.defaultView.innerHeight - 50;

    const [date, setDate] = useState(null);

    useEffect(() => {
        async function getDate() {
            const res = await fetch("/api/date");
            const newDate = await res.text();
            setDate(newDate);
        }
        getDate();
    }, []);

    const [sidebar, setSidebar] = useState(false);
    const [offset, setOffset] = useState(0);
    const [topOfPage, setTopOfPage] = useState(true);
    const [belowHeroSection, setBelowHeroSection] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    const checkOrigin = () => {
        console.log("scrolling");
    };

    useEffect(() => {
        document.body.style.overflow = sidebar ? "hidden" : "auto";
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };

        console.log(pageYOffset);
        console.log(`pageHeight: ${pageHeight}`);

        if (pageYOffset > pageHeight) {
            setBelowHeroSection(true);
        } else {
            setBelowHeroSection(false);
        }

        if (pageYOffset === 0) {
            setTopOfPage(true);
        } else {
            setTopOfPage(false);
        }
    });

    return (
        <main onScroll={checkOrigin} className={topOfPage ? "start" : ""}>
            <nav></nav>
            <nav
                id="socialDrawer"
                className={
                    sidebar || belowHeroSection
                        ? "sideDrawer active"
                        : "sideDrawer"
                }
            >
                <div className="drawerInfo">
                    <h3>Social Links</h3>
                    <div className="socialLinks" onClick={showSidebar}>
                        {socialData.map((socialEntity) => (
                            <SocialBtn
                                color={socialEntity.color}
                                link={socialEntity.link}
                                classes={socialEntity.classes}
                                name={socialEntity.name}
                                key={socialEntity.name}
                            ></SocialBtn>
                        ))}
                    </div>
                </div>

                <button onClick={showSidebar}>X</button>
            </nav>
            <div className="hero">
                <h1>The World Of IO</h1>
                <img src={logo} alt="" />
                <a
                    href="https://www.youtube.com/watch?v=-ncvem5JAVo&amp;ab_channel=WorldofIo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className="fab fa-youtube fa-lg fa-2x"
                        aria-hidden="true"
                    ></i>
                    Intro Video
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,320L120,320C240,320,480,320,720,298.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg>
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
                    <p>{date ? date : "Loading date..."}</p>
                    <p>{date ? date : "Loading date..."}</p>
                    <p>{date ? date : "Loading date..."}</p>
                    <p>{date ? date : "Loading date..."}</p>
                    <p>{date ? date : "Loading date..."}</p>
                </section>
            </div>
        </main>
    );
}

export default App;
