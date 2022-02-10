import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import scrollToSection from "utils/scrollToSection";

export default function useHashLinkOnStart() {
    const location = useLocation();
    const id = location.hash;

    useEffect(() => {
        scrollToSection(id);
    }, []);
}
