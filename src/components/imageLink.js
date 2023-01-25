import React from "react";
import { useState, useEffect } from "react";

import useMediaQuery from "hooks/useMediaQuery";

import styles from "./imageLink.module.scss";

function ImageLink({ src, alt, children, headerStyle, title }) {
    const [isActive, setIsActive] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsActive(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsActive(false);
        }
    };

    const handleClick = () => {
        if (isMobile) {
            setIsActive(!isActive);
        }
    };

    return (
        <div
            className={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div
                className={`${styles.screen} ${
                    isActive ? styles["screen-hide"] : ""
                }`}
            ></div>
            <div
                className={`${isActive ? styles.show : ""} ${
                    styles.iconContainer
                }`}
            >
                {children}
            </div>
            <h2
                className={`${
                    isActive ? styles.showHeader : ""
                } ${headerStyle} ${styles.header} `}
            >
                {title}
            </h2>
            <img src={src} alt={alt} />
        </div>
    );
}

export default ImageLink;
