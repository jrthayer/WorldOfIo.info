import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

//====== Layout Components
// shared
import Section from "components/containers/section";

// local
import Series from "./components/series";

function ShowsSection() {
    const [showsArray, setShowsArray] = useState(null);

    const showDataUrl = process.env.REACT_APP_SHOW_DATA_URL;

    useEffect(() => {
        axios(showDataUrl)
            .then((response) => {
                const showMap = new Map();
                response.data.forEach((show) => {
                    //Skip sessions that weren't part of io shows
                    if (
                        show.title === "misc" ||
                        show.title === "Phase 2 Major Events"
                    )
                        return;

                    convertDate(show);

                    if (show.seasons) {
                        show.seasons.forEach((season) => {
                            convertDate(season);
                        });
                    }

                    showMap.set(show.title, show);
                });

                setShowsArray(showMap);
            })
            .catch(() => {});
    }, []);

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

    //Converts isoDate to local date format
    function convertDate(showData) {
        showData.startDate = new Date(showData.startDate);
        showData.endDate = new Date(showData.endDate);
    }

    return (
        <Section features="fullscreen no-margin">
            <h1
                className="header-ioverse-gradient fs-700"
                style={{
                    marginBottom: "3rem",
                    textTransform: "uppercase",
                }}
            >
                Ioverse Shows
            </h1>
            {showsArray ? <>{createShowObjects(showsArray)}</> : null}
        </Section>
    );
}

export default ShowsSection;
