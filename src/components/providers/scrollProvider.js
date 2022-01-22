import React from "react";
import { createContext, useEffect, useState } from "react";

const scrollContext = React.createContext({});

const ScrollProvider = ({ children }) => {
    // This is the exact same logic that we previously had in our hook
    const [xOffset, setXOffset] = React.useState(window.pageXOffset);
    const [yOffset, setYOffset] = React.useState(window.pageYOffset);
    const [offsetHeight, setOffsetHeight] = React.useState(
        document.body.offsetHeight
    );
    const [offsetWidth, setOffsetWidth] = React.useState(
        document.body.offsetWidth
    );

    const handleDimension = () => {
        setOffsetHeight(document.body.offsetHeight);
        setOffsetWidth(document.body.offsetWidth);
        console.log(`resize fired, height: ${offsetHeight}`);
    };

    const handleOffset = () => {
        setXOffset(window.pageXOffset);
        setYOffset(window.pageYOffset);
    };

    let resizeObserver = new ResizeObserver(handleDimension);

    React.useEffect(() => {
        resizeObserver.observe(document.body);
        window.addEventListener("scroll", handleOffset);
        return () => {
            window.removeEventListener("scroll", handleOffset);
        };
    }, []);

    /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
    return (
        <scrollContext.Provider
            value={{ xOffset, yOffset, offsetHeight, offsetWidth }}
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
    const { xOffset, yOffset, offsetHeight, offsetWidth } =
        React.useContext(scrollContext);
    return { xOffset, yOffset, offsetHeight, offsetWidth };
};

export { ScrollProvider, useScroll };
