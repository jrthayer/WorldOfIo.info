import React from "react";

import styles from "./section.module.scss";

const Section = (props) => {
    return (
        <section
            className={`${styles.section} ${props.className}`}
            style={props.style}
            id={props.id}
        >
            <div className={styles.sectionContent}>{props.children}</div>
        </section>
    );
};

export default Section;
