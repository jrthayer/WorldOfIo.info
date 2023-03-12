import styles from "./schedule.module.scss";

// ---COMPONENTS---
// local
import ScheduleDay from "./scheduleDay";

const Schedule = ({ data, header }) => {
    return (
        <div className={styles.container}>
            <h2 className={`fs-650 header-ioverse`}>Schedule</h2>
            <h4 className={`header-ioverse-gradient`}>{header}</h4>
            <div className={styles.innerContainer}>
                {data.map((day, index) => {
                    return <ScheduleDay data={day} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Schedule;
