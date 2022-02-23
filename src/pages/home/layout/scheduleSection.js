import { useEffect } from "react";

import styles from "./scheduleSection.module.scss";
// --- COMPONENTS ---
// local
import Schedule from "./components/schedule";

// shared
import Section from "components/containers/section";
import scheduleData from "scripts/convertSchedule.js";

const ScheduleSection = () => {
    useEffect(() => {
        console.log(scheduleData);
    }, []);

    return (
        <Section id="schedule" className={styles.container}>
            <h2 className="fs-700">Schedule</h2>
            <Schedule data={scheduleData} />
        </Section>
    );
};

export default ScheduleSection;
