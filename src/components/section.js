import React, { useEffect, useMemo } from "react";

import "../styles/section.scss";

function setStyles(props) {
    let styleProperties = {};

    switch (props.bgType) {
        case "image":
            styleProperties.backgroundImage = `url(${props.bgData})`;
            break;
        case "color":
            styleProperties.backgroundColor = props.bgData;
            break;
    }

    return styleProperties;
}

const Section = (props) => {
    // prettier-ignore
    let styles = useMemo(() => setStyles(props), []);

    return (
        <section className="section" style={styles} id={props.id}>
            <div className="section-content">{props.children}</div>
        </section>
    );
};

export default Section;
