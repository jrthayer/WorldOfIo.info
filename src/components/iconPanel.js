import React from "react";
import { useEffect, useState } from "react";

import styles from "./iconPanel.module.scss";

import setFontAwesomeClass from "utils/setFontAwesomeClass";

const IconPanel = ({ data, children, type }) => {
    const [iconClasses, setIconClasses] = useState("");

    useEffect(() => {
        setIconClasses(setFontAwesomeClass(type));
    }, []);

    return (
        <a
            href={data.link}
            rel="noopener noreferrer"
            target="_blank"
            className="iconPanel"
        >
            <div className={styles.container}>
                <div className={styles.icon}>
                    <i
                        className={`${iconClasses} fa-2x header-ioverse`}
                        style={{ color: data.primaryColor }}
                    ></i>
                </div>
                <div className={styles.description}>
                    <h3
                        className={`${styles["description-header"]} header-ioverse`}
                    >
                        {data.text}
                    </h3>
                    {children}
                </div>
            </div>
        </a>
    );
};

export default IconPanel;
