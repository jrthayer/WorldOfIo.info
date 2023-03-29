import React from "react";

function Session({ data, updateAudio }) {
    function handleClick() {
        let url = data.enclosures[0].url;
        updateAudio(url);
        console.log("seesion clicked");
    }

    return (
        <div key={data.title} style={{ color: "white" }} onClick={handleClick}>
            {data.title}
        </div>
    );
}

export default Session;
