import React from "react";

import styles from "./section.module.scss";

import useCheckNull from "hooks/useCheckNull";

const Section = (props) => {
    const classes = useCheckNull(props.className);

    return (
        <section
            className={`${styles.section} ${classes}`}
            style={props.style}
            id={props.id}
        >
            <div className={styles.sectionContent}>{props.children}</div>
        </section>
    );
};

export default Section;
