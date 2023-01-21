import React from "react";
import { useState, useEffect, useRef } from "react";

import styles from "./dynamicLogo.module.scss";

function DynamicLogo(props) {
    const [style, setStyle] = useState({});
    const imgRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Needed to avoid images starting at default prop values for 1 load
        if (!loaded) {
            setStyle({
                ["--width"]: "0",
                ["--height"]: "0",
                ["--width-max"]: "0",
                ["--height-max"]: "0",
            });
        } else {
            setStyle({
                ["--width"]: imgRef.current.naturalWidth + "px",
                ["--height"]: imgRef.current.naturalHeight + "px",
                ["--width-max"]: props.widthMax,
                ["--height-max"]: props.heightMax,
            });
        }
    }, [loaded]);

    return (
        <img
            ref={imgRef}
            src={props.src}
            alt={props.alt}
            style={style}
            className={styles.image}
            onLoad={() => setLoaded(true)}
        />
    );
}

DynamicLogo.defaultProps = {
    src: "",
    alt: "",
    widthMax: "80vw",
    heightMax: "80vh",
};

export default DynamicLogo;
