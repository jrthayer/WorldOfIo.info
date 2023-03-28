import { useEffect, useState } from "react";
import axios from "axios";

//====== Components
// local
import TableList from "./components/tableList/tableList";

// shared
import Section from "components/containers/section";

const NewsSection = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(
            "https://raw.githubusercontent.com/jrthayer/WorldOfIo.info-data/main/news.json"
        )
            .then((response) => {
                setPosts(response.data.posts);
            })
            .catch(() => {});
    }, []);

    if (posts.length > 0) {
        return (
            <Section
                id={props.id}
                type="transparent"
                features="fullscreen center-vertically"
            >
                <h2 className={`fs-700 color-white header-ioverse`}>News</h2>
                <TableList data={posts} />
            </Section>
        );
    } else {
        return null;
    }
};

export default NewsSection;
