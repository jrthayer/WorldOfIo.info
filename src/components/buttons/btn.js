import { useMemo } from "react";

import styles from "./btn.module.scss";

const Btn = (props) => {
    const inlineStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--color-primary"] = props.primary;
        styleObject["--color-secondary"] = props.secondary;

        return styleObject;
    }, [props.primary, props.secondary]);

    return (
        <a
            style={inlineStyle}
            href={props.link}
            target={props.samePage ? "" : "_blank"}
            rel={props.samePage ? "" : "noopener noreferrer"}
            className={styles.button}
        >
            {props.children}
        </a>
    );
};

Btn.defaultProps = {
    primary: "",
    secondary: "",
};

export default Btn;
