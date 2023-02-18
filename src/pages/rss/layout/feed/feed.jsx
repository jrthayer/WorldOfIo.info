import React, { useEffect, useState } from "react";

function Feed(props) {
    const [data, setData] = useState(props.data.items);

    return (
        <div>
            {data.map((episode) => (
                <div key={episode.title} style={{ color: "white" }}>
                    {episode.title}
                </div>
            ))}
        </div>
    );
}

export default Feed;
