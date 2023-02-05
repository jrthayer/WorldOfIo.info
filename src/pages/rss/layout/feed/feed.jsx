import React from "react";

function Feed(props) {
    return <div>{JSON.stringify(props.data)}</div>;
}

export default Feed;
