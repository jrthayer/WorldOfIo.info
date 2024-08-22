import React, { useState } from "react";
import Series from "./components/series";

function Feed(props) {
    const [shows, setShows] = useState(props.shows);

    function createShowObjects(showsData) {
        let showObjects = [];
        for (let [key, value] of showsData) {
            if (!Object.hasOwn(value, "parentShow")) {
                showObjects.push(
                    <Series data={value} key={value.title}></Series>
                );
            }
        }
        return showObjects;
    }

    return <>{shows ? <>{createShowObjects(shows)}</> : null}</>;
}

export default Feed;
