import React, { CSSProperties } from "react";

const SocialBtn = (props) => {
    return (
        <a
            style={{ "--buttonColor": props.color }}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
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
