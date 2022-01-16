import React from "react";

import Home from "./pages/home";

import "./styles/main.scss";

import { ViewportProvider } from "./components/providers/viewportProvider";
import { ScrollProvider } from "./components/providers/scrollProvider";
import { ModalStateProvider } from "./components/providers/modalStateProvider";

function App() {
    return (
        <ViewportProvider>
            <ScrollProvider>
                <ModalStateProvider>
                    <main>
                        <nav className="navBar"></nav>
                        <Home></Home>
                    </main>
                </ModalStateProvider>
            </ScrollProvider>
        </ViewportProvider>
    );
}

export default App;
