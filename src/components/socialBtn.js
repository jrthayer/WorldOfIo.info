import React from "react";

import "../styles/socialBtn.scss";

const SocialBtn = (props) => {
    return (
        <a
            style={
                props.color != "undefined"
                    ? { "--buttonColor": props.color }
                    : {}
            }
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
