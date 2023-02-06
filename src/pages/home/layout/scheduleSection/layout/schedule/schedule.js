import styles from "./schedule.module.scss";
import { useState } from "react";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = (props) => {
    const data = props.data;
    return (
        <div className={styles.container}>
            <h2 className={`fs-650 header-ioverse`}>Schedule</h2>
            <h4 className={`header-ioverse-gradient`}>Week of Feb 6th</h4>
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
