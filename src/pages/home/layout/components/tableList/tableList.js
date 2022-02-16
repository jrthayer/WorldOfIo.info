import styles from "./tableList.module.scss";

import TableSection from "./components/tableSection";

const TableList = (props) => {
    const data = props.data;
    console.log("TableList");
    return (
        <div className={styles.container}>
            {data.map((singleEntry, index) => {
                return <TableSection data={singleEntry} key={index} />;
            })}
        </div>
    );
};

export default TableList;
