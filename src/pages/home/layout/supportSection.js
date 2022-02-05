import styles from "./supportSection.module.scss";

import Section from "components/containers/section";
import IconPanel from "components/iconPanel";

import socialData from "data/social";

const SupportSection = (props) => {
    return (
        <Section id={props.id}>
            <h2 className="fs-700">How To Support The World of IO</h2>
            <div className={styles.supportGroup}>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "Patreon")}
                >
                    <p>
                        Not only does brett get the largest cut from patreon but
                        you get the most bang for your buck.
                    </p>
                    <br />
                    <p>
                        Patreon members get many exclusive features including:
                    </p>
                    <ul>
                        <li>Session MP3s</li>
                        <li>DM Notes</li>
                        <li>Sneak Peaks</li>
                    </ul>
                </IconPanel>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "Merch")}
                >
                    <p>Purchase merch of the wholesome Racc himself.</p>
                    <br />
                    <p>
                        Currently the main focus of the merchandise is a dnd
                        class series that so far includes fighter and wizard.
                    </p>
                </IconPanel>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "Twitch")}
                >
                    <p>
                        Watch the sessions live on twitch! Subscribe, donate,
                        and participate in the chat.
                    </p>
                    <br />
                    <p>Weekly stream times can be found in the discord!</p>
                </IconPanel>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "YouTube")}
                >
                    <p>
                        Watching the previous campaigns on the youtube channel
                        provides ad revenue and helps spread IO to new viewers.
                    </p>
                    <br />
                    <p>
                        A master playlist containing all 245 sessions of Phase 2
                        is available for your convenience!
                    </p>
                </IconPanel>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "Discord")}
                >
                    <p>Join and interact with the amazing discord!</p>
                    <br />
                    <p>
                        Whether you're looking for campaign fanart, a bingo
                        board to fill out during the game, or just a place to
                        talk about all things IO you can find it here!
                    </p>
                </IconPanel>
            </div>
        </Section>
    );
};

export default SupportSection;
