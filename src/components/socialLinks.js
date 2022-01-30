import React from "react";
import "../styles/socialLinks.scss";

import { useMemo } from "react";
import SocialBtn from "./socialBtn";

function checkUndefined(elem) {
    let returnValue = elem != undefined ? elem : "";
    return returnValue;
}

const SocialLinks = (props) => {
    return (
        <div
            className={`socialLinks`}
            style={
                props.width != "undefined"
                    ? { "--component-width": props.width }
                    : {}
            }
        >
            {props.data.map((singleEntry) => (
                <SocialBtn
                    color={singleEntry.color}
                    link={singleEntry.link}
                    // prettier-ignore
                    classes_button={`${checkUndefined(singleEntry.classes_button)} ${checkUndefined(props.classes_button)}`}
                    // prettier-ignore
                    classes_text={`${checkUndefined(singleEntry.classes_text)} ${checkUndefined(props.classes_text)}`}
                    classes={`${singleEntry.classes} ${props.classes_text}`}
                    name={singleEntry.name}
                    key={singleEntry.name}
                    samePage={props.samePage}
                ></SocialBtn>
            ))}
        </div>
    );
};

export default SocialLinks;
