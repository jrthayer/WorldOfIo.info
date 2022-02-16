import styles from "./tableSection.module.scss";

//------------ Components
// local
import TableGroup from "./tableGroup";

const TableSection = (props) => {
    const data = props.data;
    console.log("TableSection");

    return (
        <div className={styles.section}>
            {data.header != undefined ? (
                <div className={`${styles.header} fs-500`}>{data.header}</div>
            ) : null}

            {data.sections != undefined
                ? data.sections.map((singleEntry, index) => {
                      return <TableGroup data={singleEntry} key={index} />;
                  })
                : null}
        </div>
    );
};

export default TableSection;
