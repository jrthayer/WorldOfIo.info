//====== CSS Styles
import styles from "./supportSection.module.scss";

//====== Components
// Shared
import Section from "components/containers/section";
import IconPanel from "components/iconPanel";

//====== Data
import socialData from "data/social";

const SupportSection = (props) => {
    return (
        <Section id={props.id} type="transparent">
            <h2 className="fs-700 header-ioverse">
                How To Support The IOVERSE
            </h2>
            <div className={styles.supportGroup}>
                <IconPanel
                    data={socialData.find((obj) => obj.type === "Kickstarter")}
                    type="Kickstarter"
                >
                    <p>
                        April 11th is the start of the Kickstarter Campaign for
                        Brett's first ever TTRPG Book - Why Slay Dragons when
                        you could be FISHING!{" "}
                    </p>
                    <br />
                    <p>
                        Be sure to follow so you can get immediate access, and
                        be able to support with discounted Early Bird pledges!
                    </p>
                </IconPanel>
                <IconPanel
                    data={socialData.find((obj) => obj.text === "Patreon")}
                    type="patreon"
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
                    type="merch"
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
                    type="twitch"
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
                    type="youtube"
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
                    type="discord"
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
