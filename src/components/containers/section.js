import React from "react";

import styles from "./section.module.scss";

const Section = ({ type, style, id, children, features }) => {
    let typeClass;

    if (type === "primary") {
        typeClass = styles.primary;
    } else if (type === "secondary") {
        typeClass = styles.secondary;
    } else if (type === "transparent") {
        typeClass = styles.transparent;
    }

    let featureClasses = "";
    if (features.includes("fullscreen")) {
        featureClasses += styles.fullscreen;
    }

    return (
        <section
            className={`${styles.section} ${typeClass} ${featureClasses}`}
            style={style}
            id={id}
        >
            <div className={styles.sectionContent}>{children}</div>
        </section>
    );
};

Section.defaultProps = {
    type: "transparent",
    features: "",
};

export default Section;
