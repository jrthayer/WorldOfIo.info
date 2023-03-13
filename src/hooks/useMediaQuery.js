import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

/**
 * It returns a boolean value that indicates whether the media query matches the current viewport
 * @param mediaQuery - The media query you want to listen to.
 * @returns The useMediaQuery hook returns a boolean value that indicates whether the media query
 * matches the current viewport.
 */
export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState(null);

    useEffect(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

    return isMatch;
}
