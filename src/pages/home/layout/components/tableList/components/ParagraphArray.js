import styles from "./ParagraphArray.module.scss";

import { Fragment } from "react/cjs/react.development";

import useCheckNull from "hooks/useCheckNull";

const ParagraphArray = (props) => {
    const data = useCheckNull(props.data);

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
                <p className={styles.paragraph}>{data}</p>
            </Fragment>
        );
    }
};

export default ParagraphArray;
