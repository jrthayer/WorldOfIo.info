import React from "react";
import { useState } from "react";

import styles from "./imageLink.module.scss";

function ImageLink({ src, alt, children, headerStyle, title }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <div
                className={`${styles.screen} ${
                    isHovered ? styles["screen-hide"] : ""
                }`}
            ></div>
            <div
                className={`${isHovered ? styles.show : ""} ${
                    styles.iconContainer
                }`}
            >
                {children}
            </div>
            <h2
                className={`${
                    isHovered ? styles.showHeader : ""
                } ${headerStyle} ${styles.header} `}
            >
                {title}
            </h2>
            <img src={src} alt={alt} />
        </div>
    );
}

export default ImageLink;
