import styles from "./scheduleSection.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";

// --- COMPONENTS ---
// local
import Schedule from "./layout/schedule/schedule.js";

// shared
import Section from "components/containers/section";
import Countdown from "./layout/countdown/countdown";

import { convertedSchedule } from "pages/home/scripts/convertSchedule.js";

const ScheduleSection = () => {
    const [schedule, setSchedule] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        axios(
            "https://raw.githubusercontent.com/jrthayer/www.WorldOfIo.info-data/main/schedule.json"
        )
            .then((response) => {
                let rawSchedule = convertedSchedule(response.data.schedule);
                setSchedule(rawSchedule);
                setHeader(response.data.dayOfWeek);
            })
            .catch(() => {});
    }, []);

    if (schedule && header) {
        return (
            <Section id="schedule" type="transparent">
                <div className={styles.container}>
                    <Schedule data={schedule} header={header} />
                    <Countdown data={schedule} startDate={header} />
                </div>
            </Section>
        );
    }
    {
        console.error("Schedule or Header are null!");
        return null;
    }
};

export default ScheduleSection;
