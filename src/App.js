import React, { useEffect } from "react";

import Home from "./pages/home";

import "./styles/main.scss";

import { ViewportProvider } from "./components/providers/viewportProvider";
import { ScrollProvider } from "./components/providers/scrollProvider";
import { ModalStateProvider } from "./components/providers/modalStateProvider";

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
                <ModalStateProvider>
                    <main>
                        <Home></Home>
                    </main>
                </ModalStateProvider>
            </ScrollProvider>
        </ViewportProvider>
    );
}

export default App;
