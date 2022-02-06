import styles from "./statSection.module.scss";

import Section from "components/containers/section";
import StatCard from "components/statCard";

const StatSection = (props) => {
    return (
        <Section id={props.id} className={styles.section}>
            <h2 className="fs-700">Phase 2 Stats</h2>
            <p className="color-text">
                World of IO phase 2 lasted a little over a year and a half,
                below are some interesting stats of the events that occurred
                during this time frame:
            </p>
            <div className={styles.statGroup}>
                <StatCard stat="Hours Of Content" value={660}>
                    Spanning across 245 videos with an average length of{" "}
                    <span>2 hours 40 mins</span>
                </StatCard>

                <StatCard stat="Player Characters" value={70} symbol="+">
                    {/* + */}
                    Across 50+ unique players!
                </StatCard>

                <StatCard stat="Campaigns" value={16}>
                    With the average number of sessions being 15 and the most
                    sessions for a single campaign being 64, which was The Miss
                    Demeanor!
                </StatCard>

                <StatCard stat="Diverse Regions Explored" value={10} symbol="+">
                    {/* + */}
                    Ranging from the wide open seas to the Astral plane itself!
                </StatCard>

                <StatCard stat="Players Ascended To Godhood" value={4}>
                    Starting as mere adventures their adventures in phase 2 lead
                    them to this role.
                </StatCard>

                <StatCard stat="Major Boss Events" value={2}>
                    Each of which spanned over 9 hours and involved 3 separate
                    parties working in stages!
                </StatCard>

                <StatCard stat="Amazing DM" value={1}>
                    Who supported the players in telling the story they wanted
                    and brought us this amazing world!
                </StatCard>
            </div>
        </Section>
    );
};

export default StatSection;
