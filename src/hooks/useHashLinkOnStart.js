import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import scrollToSection from "utils/scrollToSection";

export default function useHashLinkOnStart() {
    const location = useLocation();
    const id = location.hash;

    useEffect(() => {
        // Temporary fix to allow page time to load before scrolling to section
        setTimeout(() => {
            scrollToSection(id);
        }, 500);
    }, []);
}
