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
            target={props.samePage ? "" : "_blank"}
            rel={props.samePage ? "" : "noopener noreferrer"}
            className={`socialBtn ${props.classes_button}`}
        >
            <i
                style={{ "--socialName": `\"${props.name}\"` }}
                className={props.classes_text}
                aria-hidden="true"
            ></i>
        </a>
    );
};

export default SocialBtn;
