import { useMemo } from "react";

import styles from "./btn.module.scss";

const Btn = (props) => {
    const inlineStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--color-primary"] = props.primary;
        styleObject["--color-secondary"] = props.secondary;
        styleObject["padding"] = props.padding;
        styleObject["margin"] = props.margin;

        return styleObject;
    }, [props.primary, props.secondary, props.padding]);

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
    padding: "",
};

export default Btn;
