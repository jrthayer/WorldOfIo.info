import styles from "./scheduleSection.module.scss";
// --- COMPONENTS ---
// local
import Schedule from "./layout/schedule/schedule.js";

// shared
import Section from "components/containers/section";
import Countdown from "./layout/countdown/countdown";

import scheduleData from "pages/home/scripts/convertSchedule.js";
import { dayOfWeek } from "data/schedule";

const ScheduleSection = () => {
    return (
        <Section id="schedule" type="transparent">
            <div className={styles.container}>
                <Schedule data={scheduleData} header={dayOfWeek} />
                <Countdown data={scheduleData} startDate={dayOfWeek} />
            </div>
        </Section>
    );
};

export default ScheduleSection;
