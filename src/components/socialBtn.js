import React from "react";

import "./socialBtn.css";

const SocialBtn = (props) => {
    return (
        <a
            style={{ "--buttonColor": props.color }}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="socialBtn"
        >
            <i
                style={{ "--socialName": `\"${props.name}\"` }}
                className={props.classes}
                aria-hidden="true"
            ></i>
        </a>
    );
};

export default SocialBtn;
