import styles from "./schedule.module.scss";
import { useState } from "react";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = (props) => {
    const data = props.data;
    const [test, setTest] = useState(" ");
    const [hello, setHello] = useState(" ");
    return (
        <div className={styles.container}>
            <h2 className={`fs-650 ${styles.header}`}>Schedule</h2>
            <h4 className={`${styles.week}`}>Week of Dec 12th</h4>
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
