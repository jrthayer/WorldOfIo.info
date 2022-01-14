import React from "react";
import { createContext, useEffect, useState } from "react";

const scrollContext = React.createContext({});

const ScrollProvider = ({ children }) => {
    // This is the exact same logic that we previously had in our hook
    const [xOffset, setXOffset] = React.useState(window.pageXOffset);
    const [yOffset, setYOffset] = React.useState(window.pageYOffset);

    const handleOffset = () => {
        setXOffset(window.pageXOffset);
        setYOffset(window.pageYOffset);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleOffset);
        return () => {
            window.removeEventListener("scroll", handleOffset);
        };
    }, []);

    /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
    return (
        <scrollContext.Provider value={{ xOffset, yOffset }}>
            {children}
        </scrollContext.Provider>
    );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useScroll = () => {
    /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
    const { xOffset, yOffset } = React.useContext(scrollContext);
    return { xOffset, yOffset };
};

export { ScrollProvider, useScroll };
