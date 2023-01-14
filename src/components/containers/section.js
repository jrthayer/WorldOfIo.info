import React from "react";

import styles from "./section.module.scss";

const Section = ({ type, style, id, children }) => {
    let typeClass;

    if (type === "primary") {
        typeClass = styles.primary;
    } else if (type === "secondary") {
        typeClass = styles.secondary;
    } else if (type === "transparent") {
        typeClass = styles.transparent;
    }

    return (
        <section
            className={`${styles.section} ${typeClass}`}
            style={style}
            id={id}
        >
            <div className={styles.sectionContent}>{children}</div>
        </section>
    );
};

Section.defaultProps = {
    type: "primary",
};

export default Section;
