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

function appendClasses(name, classes) {
    let returnClasses = "";

    if (classes != undefined) {
        classes = classes.split(" ");
        classes.forEach((element) => {
            returnClasses += `${name}-${element} `;
        });
    }

    return returnClasses;
}

const Section = (props) => {
    // prettier-ignore
    let styles = useMemo(() => setStyles(props), []);
    let classes = useMemo(() => appendClasses("section", props.className));

    return (
        <section className={`section ${classes}`} style={styles} id={props.id}>
            <div className="section-content">{props.children}</div>
        </section>
    );
};

export default Section;
