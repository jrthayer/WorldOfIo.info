import styles from "./schedule.module.scss";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = (props) => {
    const data = props.data;

    return (
        <div className={styles.container}>
            <h2 className={`fs-650 ${styles.header}`}>Schedule</h2>
            <h4 className={`${styles.week}`}>Week of Nov 14th</h4>
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
