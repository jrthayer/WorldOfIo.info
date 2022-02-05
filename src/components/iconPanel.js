import React from "react";
import { useMemo } from "react";

import styles from "./iconPanel.module.scss";

const IconPanel = (props) => {
    let data = useMemo(() => {
        return props.data;
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
                        className={data.iconClasses}
                        style={{ color: data.primaryColor }}
                    ></i>
                </div>
                <div className={styles.description}>
                    <h3 className={`${styles["description-header"]}`}>
                        {data.text}
                    </h3>
                    {props.children}
                </div>
            </div>
        </a>
    );
};

export default IconPanel;
