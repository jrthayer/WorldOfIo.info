import React from "react";

import styles from "./screen.module.scss";

const Screen = (props) => {
    return (
        <div
            className={`${styles.screen} ${props.drawer ? styles.drawer : ""}`}
        ></div>
    );
};

Screen.defaultProps = {
    drawer: false,
};

export default Screen;
