import styles from "./schedule.module.scss";
import { useState } from "react";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = (props) => {
    const data = props.data;
    return (
        <div className={styles.container}>
            <h1 className="header-ioverse fs-650">Schedule</h1>
            <h4 className="header-ioverse-gradient fs-300">Week of Dec 19th</h4>

            <div className={styles.innerContainer}>
                {data.map((day, index) => {
                    // if (day.events.length != 0) {
                    return <ScheduleDay data={day} key={index} />;
                    // }
                })}
            </div>
        </div>
    );
};

export default Schedule;
