import React, { useEffect, useState } from "react";
import Show from "./show";

function Series(props) {
    const [data, setData] = useState(props.data);
    const [showData, setShowData] = useState(props.data);
    const [currentShowIndex, setCurrentShowIndex] = useState(-1);

    useEffect(() => {
        if (currentShowIndex === -1) {
            setShowData(data);
        } else {
            setShowData(data.seasons[currentShowIndex]);
        }
    }, [currentShowIndex]);

    function changeShow() {
        setCurrentShowIndex((prevIndex) => {
            prevIndex++;
            if (prevIndex >= data.seasons.length) {
                return -1;
            } else {
                return prevIndex;
            }
        });
    }

    return (
        <div>
            <Show data={showData}></Show>
            {data.seasons ? (
                <button onClick={changeShow}>Season Changer</button>
            ) : null}
        </div>
    );
}

export default Series;
