import { useMemo } from "react";

import styles from "./btn.module.scss";

import useCheckNull from "hooks/useCheckNull";

const Btn = (props) => {
    const primary = useCheckNull(props.primary);
    const secondary = useCheckNull(props.secondary);

    const inlineStyle = useMemo(() => {
        let styleObject = {};

        styleObject["--color-primary"] = primary;
        styleObject["--color-secondary"] = secondary;

        return styleObject;
    }, [primary, secondary]);

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

export default Btn;
