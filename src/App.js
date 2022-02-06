import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "pages/home/home";
import Phase2 from "pages/phase2/phase2";

import "./styles/main.scss";

import { ScrollProvider } from "components/providers/scrollProvider";
import { ViewportProvider } from "components/providers/viewportProvider";

function App() {
    useEffect(() => {
        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
        }
    }, []);

    return (
        <Router>
            <ViewportProvider>
                <ScrollProvider>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/phase2" element={<Phase2 />} />
                        </Routes>
                    </main>
                </ScrollProvider>
            </ViewportProvider>
        </Router>
    );
}

export default App;
