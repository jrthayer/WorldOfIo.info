//====== CSS Styles
import styles from "./majorEventsSection.module.scss";

//====== Components
import Section from "components/containers/section";
import ImageLink from "components/imageLink";
import IconBtn from "components/buttons/iconBtn";

//====== Data
// Events
import firstCrossover from "images/first_crossover.webp";
import chamberImage from "images/chamber_of_the_eight.webp";
import kaasma from "images/kaasma_khara.webp";
import shadowInvasion from "images/shadow_invasion.webp";

// Gods
import hollow from "images/hollow.webp";
import layton from "images/layton.webp";
import haio from "images/haio.webp";
import sachi from "images/sachi.webp";

//====== Main Component
const MajorEventsSection = (props) => {
    return (
        <Section id={props.id} containerClass={`color-white`}>
            <h2 className={`fs-700 header-ioverse-gradient ${styles.header}`}>
                Major Events In Phase 2
            </h2>
            <div className={styles.eventsContainer}>
                <ImageLink
                    title="First Crossover"
                    alt="First Crossover"
                    src={firstCrossover}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://www.youtube.com/playlist?list=PLjMDIlamRhokv4V_7iVW1UQkQMqHW9FTs"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Astral_Academy_X_Goblins_of_Io"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Chamber Of The Eight"
                    alt="Chamber Of The Eight"
                    src={chamberImage}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://www.youtube.com/playlist?list=PLjMDIlamRholiQuHNCEdRJ4EocH_lX-Gx"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Chamber_of_the_Eight"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Kaasma Khara Fight"
                    alt="Kaasma Khara"
                    src={kaasma}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://www.youtube.com/playlist?list=PLjMDIlamRholwCXqTHB8H_XlV1QB3ruSY"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Final_Battle_Vs._Kaasma_Khara"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Shadow Invasion"
                    alt="Shadow Invasion"
                    src={shadowInvasion}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://www.youtube.com/playlist?list=PLjMDIlamRhomqs4AGzLQw2u26ejHv16Qg"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/The_Shadow_Invasion"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
            </div>
            <h2 className={`fs-700 header-ioverse-gradient ${styles.header}`}>
                Gods Of IO
            </h2>

            <div className={styles.eventsContainer}>
                <ImageLink
                    title="Hollow"
                    alt="Hollow"
                    src={hollow}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Hollow"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Layton Beardthrone"
                    alt="Layton Beardthrone"
                    src={layton}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Layton_Beardthrone"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Haio Odigwen"
                    alt="Haio Odigwen"
                    src={haio}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Haio_Odigwen"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
                <ImageLink
                    title="Sachi Ko"
                    alt="Sachi Ko"
                    src={sachi}
                    headerStyle={`header-ioverse-gradient ${styles.imageLinkHeader}`}
                >
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Sachi_Ko"
                        type="wiki"
                    ></IconBtn>
                </ImageLink>
            </div>
        </Section>
    );
};

export default MajorEventsSection;
