import React, { useEffect } from "react";

import Home from "./pages/home/home";

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
        <ViewportProvider>
            <ScrollProvider>
                <main>
                    <Home></Home>
                </main>
            </ScrollProvider>
        </ViewportProvider>
    );
}

export default App;
