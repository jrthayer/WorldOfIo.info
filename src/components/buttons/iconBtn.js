import { useEffect, useState } from "react";

import styles from "./iconBtn.module.scss";

import Btn from "./btn";

import setFontAwesomeClass from "utils/setFontAwesomeClass";

const IconBtn = (props) => {
    const [iconClasses, setIconClasses] = useState("");

    useEffect(() => {
        setIconClasses(() => {
            let classString = "";
            classString = setFontAwesomeClass(props.type);
            return classString;
        });
    }, []);

    return (
        <Btn
            link={props.link}
            samePage={props.samePage}
            primary={props.primary}
            secondary={props.secondary}
        >
            <i
                className={`${iconClasses} ${styles.icon} ${
                    props.children ? styles.padding : ""
                }`}
            >
                {props.children}
            </i>
        </Btn>
    );
};

IconBtn.defaultProps = {
    iconClasses: "fab fa-youtube fa-2x",
    type: "youtube",
    size: "2",
};

export default IconBtn;
