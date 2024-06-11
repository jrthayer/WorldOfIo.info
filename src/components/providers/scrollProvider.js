import React, { useState, useEffect, createContext, useContext } from "react";

const scrollContext = React.createContext({});
import { useLocation } from "react-router-dom";

const ScrollProvider = ({ children }) => {
    // This is the exact same logic that we previously had in our hook
    const [xOffset, setXOffset] = useState(document.documentElement.scrollLeft);
    const [yOffset, setYOffset] = useState(document.documentElement.scrollTop);

    const [scrollHeight, setScrollHeight] = useState(document.scrollHeight);
    const [scrollWidth, setScrollWidth] = useState(document.scrollWidth);

    const debounce = (func, delay) => {
        let timerId;
        return function (...args) {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const handleDimension = debounce(() => {
        setScrollHeight(document.documentElement.scrollHeight);
        setScrollWidth(document.documentElement.scrollWidth);
    }, 100);

    const handleOffset = () => {
        setXOffset(document.documentElement.scrollLeft);
        setYOffset(document.documentElement.scrollTop);
    };

    useEffect(() => {
        let resizeObserver = new ResizeObserver(handleDimension);
        resizeObserver.observe(document.documentElement);
        window.addEventListener("scroll", handleOffset);

        return () => {
            window.removeEventListener("scroll", handleOffset);
        };
    }, []);

    let location = useLocation();

    useEffect(() => {
        handleDimension();
    }, [location]);

    /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
    return (
        <scrollContext.Provider
            value={{ xOffset, yOffset, scrollHeight, scrollWidth }}
        >
            {children}
        </scrollContext.Provider>
    );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useScroll = () => {
    /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
    const { xOffset, yOffset, scrollHeight, scrollWidth } =
        useContext(scrollContext);
    return { xOffset, yOffset, scrollHeight, scrollWidth };
};

export { ScrollProvider, useScroll };
