import React, { useEffect, useMemo } from "react";

import "../styles/section.scss";

const Section = (props) => {
    let styles = useMemo(() => {
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
    }, []);

    console.log(styles);

    return (
        <section className="section" style={styles}>
            <div className="section-content">{props.children}</div>
        </section>
    );
};

export default Section;
