import React from "react";

import styles from "../form.module.scss";

import Question from "./question";

import faqData from "data/faq.js";

function Faq() {
    return (
        <div>
            <h2 className="header-ioverse-gradient fs-650">FAQ</h2>
            <div
                className={`bg-primary-light color-primary-dark ${styles.container}`}
            >
                {faqData.map((singleEntry) => (
                    <Question data={singleEntry}></Question>
                ))}
            </div>
        </div>
    );
}

export default Faq;
