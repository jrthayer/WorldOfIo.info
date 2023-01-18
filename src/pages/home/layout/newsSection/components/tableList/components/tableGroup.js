import styles from "./tableGroup.module.scss";

import ParagraphArray from "./paragraphArray";

import useCheckNull from "hooks/useCheckNull";

const TableGroup = (props) => {
    const data = props.data;
    const paragraphData = useCheckNull(data.info);

    return (
        <div className={`${styles.container}`}>
            {data.header != undefined ? (
                <div className={styles.header}>{data.header}</div>
            ) : null}

            <div className={styles.info}>
                <ParagraphArray data={paragraphData} />
            </div>
        </div>
    );
};

export default TableGroup;
