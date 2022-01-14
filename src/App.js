import React from "react";
import "./App.css";

import Home from "./pages/home";

import { ViewportProvider } from "./components/providers/viewportProvider";
import { ScrollProvider } from "./components/providers/scrollProvider";
import {
    ModalStateProvider,
    useModalState,
} from "./components/providers/modalStateProvider";

function App() {
    const { modalState } = useModalState();

    function setModalState(state) {
        setModalOpen(state);
    }

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
