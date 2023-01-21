import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/home/home";
import Phase2 from "pages/phase2/phase2";

import "./styles/main.scss";

import { ScrollProvider } from "components/providers/scrollProvider";
import { ViewportProvider } from "components/providers/viewportProvider";

import ScrollToTop from "layout/scrollToTop";

import styles from "./bg.module.scss";

function App() {
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <ViewportProvider>
                <ScrollProvider>
                    <main>
                        {/* this is done to allow a 100vh bg on mobile devices */}
                        {/* reference this article: https://css-tricks.com/the-fixed-background-attachment-hack/ */}
                        <div
                            id="backgroundImage"
                            className={styles.backgroundContainer}
                        ></div>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/phase2" element={<Phase2 />} />
                            <Route path="*" element={<div>404!</div>} />
                        </Routes>
                    </main>
                </ScrollProvider>
            </ViewportProvider>
        </Router>
    );
}

export default App;
