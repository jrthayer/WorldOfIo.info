import React from "react";
import "../styles/socialLinks.scss";

import { useEffect } from "react";
import SocialBtn from "./socialBtn";

import socialData from "../data/social.js";

const SocialLinks = (props) => {
    useEffect(() => {
        console.log("social links redrawn");
    });

    return (
        <div className={`socialLinks`}>
            {socialData.map((singleEntry) => (
                <SocialBtn
                    color={singleEntry.color}
                    link={singleEntry.link}
                    classes={singleEntry.classes}
                    name={singleEntry.name}
                    key={singleEntry.name}
                ></SocialBtn>
            ))}
        </div>
    );
};

export default SocialLinks;
