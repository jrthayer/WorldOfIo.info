//------------ Components
// local
import TableList from "./components/tableList/tableList";

// shared
import Section from "components/containers/section";

// data
import newsData from "data/news.js";

const NewsSection = (props) => {
    return (
        <Section id={props.id} type="transparent">
            <h2 className={`fs-700 color-white header-ioverse`}>News</h2>
            <TableList data={newsData} />
        </Section>
    );
};

export default NewsSection;
