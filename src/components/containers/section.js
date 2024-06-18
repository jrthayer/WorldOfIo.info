import React from "react";

import styles from "./section.module.scss";

const Section = ({ type, style, id, children, features, containerClass }) => {
    let typeClass;

    if (type === "primary") {
        typeClass = styles.primary;
    } else if (type === "secondary") {
        typeClass = styles.secondary;
    } else if (type === "transparent") {
        typeClass = styles.transparent;
    }

    let featureClasses = "";
    // prettier-ignore
    if (features.includes("fullscreen"))featureClasses += " " + styles.fullscreen;
    // prettier-ignore
    if (features.includes("center-vertically"))featureClasses += " "+styles["center-vertically"];
    // prettier-ignore
    if (features.includes("no-margin"))featureClasses += " " +styles["no-margin"];

    return (
        <section
            className={`${styles.section} ${typeClass} ${featureClasses}`}
            style={style}
            id={id}
        >
            <div className={`${styles.sectionContent} ${containerClass}`}>
                {children}
            </div>
        </section>
    );
};

Section.defaultProps = {
    type: "transparent",
    features: "",
    containerClass: "",
};

export default Section;
