import styles from "./tableSection.module.scss";

//------------ Components
// local
import TableGroup from "./tableGroup";

const TableSection = (props) => {
    const data = props.data;

    return (
        <div className={`${styles.section}`}>
            {data != undefined && data.header != undefined ? (
                <div className={`${styles.header} fs-500`}>{data.header}</div>
            ) : null}

            {data != undefined && data.sections != undefined
                ? data.sections.map((singleEntry, index) => {
                      return <TableGroup data={singleEntry} key={index} />;
                  })
                : null}
        </div>
    );
};

export default TableSection;
