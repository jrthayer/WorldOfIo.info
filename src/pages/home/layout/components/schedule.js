import styles from "./schedule.module.scss";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = (props) => {
    const data = props.data;

    return (
        <div className={styles.container}>
            {data.map((day, index) => {
                if (day.events.length != 0) {
                    return <ScheduleDay data={day} key={index} />;
                }
            })}
        </div>
    );
};

export default Schedule;
