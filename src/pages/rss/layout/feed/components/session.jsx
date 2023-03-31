import React, { useMemo } from "react";
import styles from "./session.module.scss";

function Session({ index, data, updateAudio, updateSession }) {
    function handleClick() {
        let url = data.link;
        updateAudio(url);
        updateSession(index);
        console.log(data);
    }

    return (
        <div
            key={data.title}
            style={{ color: "white" }}
            onClick={handleClick}
            className={`
            ${data.watched ? styles.watched : ""} 
            ${data.isCurSession ? styles.current : ""}
            `}
        >
            {data.title}
        </div>
    );
}

export default React.memo(Session);
