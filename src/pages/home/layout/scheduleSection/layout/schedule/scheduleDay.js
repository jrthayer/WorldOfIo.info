import styles from "./scheduleDay.module.scss";

// utility
import convertMinutes from "pages/home/utils/minutesToAMPM";

const ScheduleDay = (props) => {
    const data = props.data;

    return (
        <div className={styles.container}>
            <div className={styles.label}>{data.day}</div>
            <div className={styles.infoContainer}>
                {data.events.map((curEvent, index) => {
                    const { name, minutes } = curEvent;
                    const time = convertMinutes(minutes);

                    return (
                        <div className={styles.info} key={index}>
                            <div className={styles.description}>{name}</div>
                            <div className={styles.time}>{time}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScheduleDay;
