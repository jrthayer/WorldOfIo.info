import react from "react";

import styles from "./majorEventsSection.module.scss";

import Section from "components/containers/section";
import ImageLink from "components/imageBar/imageLink";

import IconBtn from "components/buttons/iconBtn";

// Images
import firstCrossover from "images/first_crossover.webp";
import chamberImage from "images/chamber_of_the_eight.webp";
import kaasma from "images/kaasma_khara.webp";
import shadowInvasion from "images/shadow_invasion.webp";

const MajorEventsSection = () => {
    return (
        <Section
            id="majorEvents"
            containerClass={`${styles.section} color-white`}
        >
            {/* <h2 className="fs-650">The Gods of IO</h2>
            <div className={styles.majorRow}>
                <p>
                    <a
                        href="https://worldofio.fandom.com/wiki/Sachi_Ko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Sachi Ko(Ionian God of Radiance): </strong>
                    </a>
                    A member of the Mainframe of Atlas party. Once a former
                    magic student, Sachi matured over the course of her travels
                    from a clumsy young sorceress to an accomplished spellcaster
                    with an important personal mission. She is played by Woops.
                </p>
                <p>
                    <a
                        href="https://worldofio.fandom.com/wiki/Hollow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>
                            Hollow(Ionian God of Void, Emotion and Redemption):
                        </strong>
                    </a>
                    A member of the Mainframe of Atlas party, once known as
                    Leask Laell. He is played by SummersSalt.
                </p>
                <p>
                    <a
                        href="https://worldofio.fandom.com/wiki/Layton_Beardthrone"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>
                            Layton Beardthrone IV (Ionian God of Life and
                            Death):
                        </strong>
                    </a>
                    Once a forsaken and guilt-ridden survivor, Layton joined the
                    Miss Demeanor and found the love and redemption he had long
                    thought beyond him. He is played by The Completionist.
                </p>
                <p>
                    <a
                        href="https://worldofio.fandom.com/wiki/Haio_Odigwen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>
                            Haio Odigwen (Ionian God of Nature and Neutrality):
                        </strong>
                    </a>
                    A member of the Hunters of Io party. Once a fledgling hunter
                    at the beginning of her career, Haio avoided direct contact
                    of others, preferring the company of her books. Her reticent
                    nature often led being talked over and ignored by some of
                    her more energetic compatriots, but make no mistake -
                    beneath the guise of a timid young woman lies an iron will.
                    She is played by Momo.
                </p>
                <p></p>
            </div> */}

            <h2 className="fs-650 header-ioverse-gradient">
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
                        size="4"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Astral_Academy_X_Goblins_of_Io"
                        size="4"
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
                        size="4"
                        type="youtube"
                    ></IconBtn>
                    <IconBtn
                        link="https://worldofio.fandom.com/wiki/Final_Battle_Vs._Kaasma_Khara"
                        size="4"
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
        </Section>
    );
};

export default MajorEventsSection;
