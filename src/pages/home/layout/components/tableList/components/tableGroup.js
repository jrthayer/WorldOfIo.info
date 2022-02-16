import styles from "./tableGroup.module.scss";

import ParagraphArray from "./ParagraphArray";

const TableGroup = (props) => {
    const data = props.data;

    return (
        <div className={styles.container}>
            {data.header != undefined ? (
                <div className={styles.header}>{data.header}</div>
            ) : null}

            <div className={styles.info}>
                <ParagraphArray data={data.info} />
            </div>
        </div>
    );
};

export default TableGroup;
