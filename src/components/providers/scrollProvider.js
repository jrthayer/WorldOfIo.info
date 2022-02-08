import React from "react";

const scrollContext = React.createContext({});
import { useLocation } from "react-router-dom";

const ScrollProvider = ({ children }) => {
    // This is the exact same logic that we previously had in our hook
    const [xOffset, setXOffset] = React.useState(
        document.documentElement.scrollLeft
    );
    const [yOffset, setYOffset] = React.useState(
        document.documentElement.scrollTop
    );

    const [scrollHeight, setScrollHeight] = React.useState(
        document.scrollHeight
    );
    const [scrollWidth, setScrollWidth] = React.useState(document.scrollWidth);

    const handleDimension = () => {
        setScrollHeight(document.documentElement.scrollHeight);
        setScrollWidth(document.documentElement.scrollWidth);
    };

    const handleOffset = () => {
        setXOffset(document.documentElement.scrollLeft);
        setYOffset(document.documentElement.scrollTop);
    };

    let resizeObserver = new ResizeObserver(handleDimension);
    let location = useLocation();

    React.useEffect(() => {
        resizeObserver.observe(document.documentElement);
        document.addEventListener("scroll", handleOffset);
        return () => {
            document.removeEventListener("scroll", handleOffset);
        };
    }, []);

    React.useEffect(() => {
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
        React.useContext(scrollContext);
    return { xOffset, yOffset, scrollHeight, scrollWidth };
};

export { ScrollProvider, useScroll };
