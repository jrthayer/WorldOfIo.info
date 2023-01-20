import { useEffect, useState } from "react";

import styles from "./iconBtn.module.scss";

import Btn from "./btn";

function determineIconClass(type) {
    let iconClasses = "";

    type = type.toLowerCase();

    if (type === "discord") {
        iconClasses = "fab fa-discord";
    } else if (type === "twitter") {
        iconClasses = "fab fa-twitter";
    } else if (type === "patreon") {
        iconClasses = "fab fa-patreon";
    } else if (type === "twitch") {
        iconClasses = "fab fa-twitch";
    } else if (type === "youtube") {
        iconClasses = "fab fa-youtube";
    } else if (type === "reddit") {
        iconClasses = "fab fa-reddit";
    } else if (type === "merch") {
        iconClasses = "fas fa-shopping-cart";
    } else if (type === "wiki") {
        iconClasses = "fas fa-book-open";
    } else if (type === "circle") {
        iconClasses = "fas fa-dot-circle";
    } else {
        console.error("invalid icon type was given");
    }

    return iconClasses;
}

function determineSize(size) {
    let sizeClass = "";

    if (size < 1 || size > 10) {
        console.error("Valid icon size is 1-10!");
        return;
    }

    sizeClass = `fa-${size}x`;

    return sizeClass;
}

const IconBtn = (props) => {
    const [iconClasses, setIconClasses] = useState("");

    useEffect(() => {
        setIconClasses(() => {
            let classString = "";
            classString = determineIconClass(props.type);
            classString += " ";
            classString += determineSize(props.size);
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
