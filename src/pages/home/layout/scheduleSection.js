import styles from "./scheduleSection.module.scss";
// --- COMPONENTS ---
// local
import Schedule from "./components/schedule";

// shared
import Section from "components/containers/section";
import Countdown from "./components/countdown";

import scheduleData from "pages/home/scripts/convertSchedule.js";

const ScheduleSection = () => {
    return (
        <Section id="schedule">
            <div className={styles.container}>
                <Schedule data={scheduleData} />
                <Countdown data={scheduleData} />
            </div>
        </Section>
    );
};

export default ScheduleSection;
