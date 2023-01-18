import styles from "./paragraphArray.module.scss";

import { Fragment } from "react";

const ParagraphArray = (props) => {
    if (Array.isArray(data)) {
        return (
            <Fragment>
                {data.map((singleEntry, index) => {
                    return (
                        <p key={index} className={styles.paragraph}>
                            {singleEntry}
                        </p>
                    );
                })}
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <p className={styles.paragraph}>{props.data}</p>
            </Fragment>
        );
    }
};

ParagraphArray.defaultProps = {
    data: "",
};

export default ParagraphArray;
