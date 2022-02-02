import react, { useMemo } from "react";

import style from "./iconBtn.module.scss";

const IconBtn = (props) => {
    const { link, text, iconClasses } = props.data;

    const iconClassesFinal = useMemo(() => {
        if (iconClasses === "undefined") {
            if (props.iconClasses != "undefined") {
                return props.iconClasses;
            } else {
                return "";
            }
        } else {
            return iconClasses;
        }
    }, []);

    const inlineStyle = useMemo(() => {
        let styleObject = {};
        // prettier-ignore
        if (props.primary != "undefined") styleObject["--color-primary"] = props.primary;
        // prettier-ignore
        if (props.secondary != "undefined") styleObject["--color-secondary"] = props.secondary;

        return styleObject;
    }, [props.primary, props.secondary]);

    return (
        <a
            style={inlineStyle}
            href={link}
            target={props.samePage ? "" : "_blank"}
            rel={props.samePage ? "" : "noopener noreferrer"}
            className={style.container}
        >
            <i className={`${iconClassesFinal} ${style.content}`}>{text}</i>
        </a>
    );
};

export default IconBtn;
