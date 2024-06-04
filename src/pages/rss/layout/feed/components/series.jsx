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

    function changeShow(increment, numberOfSeasons) {
        setCurrentShowIndex((prevIndex) => {
            prevIndex += increment;
            console.log(prevIndex);
            if (prevIndex <= -2) {
                return numberOfSeasons - 1;
            }

            if (prevIndex >= numberOfSeasons) {
                return -1;
            } else {
                return prevIndex;
            }
        });
    }

    return (
        <div style={{ position: "relative" }}>
            {data.seasons ? (
                <button
                    onClick={() => changeShow(-1, data.seasons.length)}
                    style={{
                        position: "absolute",
                        height: "100%",
                        left: "-23px",
                    }}
                >
                    -
                </button>
            ) : null}
            <Show data={showData}></Show>
            {data.seasons ? (
                <button
                    onClick={() => changeShow(1, data.seasons.length)}
                    style={{
                        position: "absolute",
                        height: "100%",
                        right: "-23px",
                        top: "0",
                    }}
                >
                    +
                </button>
            ) : null}
        </div>
    );
}

export default Series;
