import React from "react";
import "../styles/socialLinks.scss";

import { useEffect } from "react";
import SocialBtn from "./socialBtn";

const SocialLinks = (props) => {
    useEffect(() => {
        console.log("social links redrawn");
    });

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
                    classes_button={`${singleEntry.classes_button} ${props.classes_button}`}
                    classes_text={`${singleEntry.classes_text} ${props.classes_text}`}
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
