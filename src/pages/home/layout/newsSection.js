import { Fragment } from "react";
import styles from "./newsSection.module.scss";

//------------ Components
// local
import TableList from "./components/tableList/tableList";

// shared
import Section from "components/containers/section";

// data
import newsData from "data/news.js";

const NewsSection = (props) => {
    return (
        <Section
            id={props.id}
            style={{ backgroundColor: "var(--color-primary-light)" }}
            className={styles.section}
        >
            <h2 className={`fs-700 color-white`}>News</h2>

            <TableList data={newsData} />
        </Section>
    );
};

export default NewsSection;
