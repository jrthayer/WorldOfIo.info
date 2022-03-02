import react from "react";

import styles from "./majorEventsSection.module.scss";

import Section from "components/containers/section";

const MajorEventsSection = () => {
    return (
        <Section id="majorEvents" className={styles.section}>
            <h2 className="fs-650">Major Events In Phase 2</h2>
            <a
                href="https://www.youtube.com/playlist?list=PLjMDIlamRholwCXqTHB8H_XlV1QB3ruSY"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.majorRow}>
                    <div className={styles.rowHeader}>
                        <h3 className="fs-500">The Kaasma Khara Fight</h3>
                        <i class="fab fa-youtube"></i>
                    </div>

                    <p>
                        The diabolical infant was captured by the Eight Lagos
                        and turned into a weapon by which they would destroy Io.
                        Kaasma Khara was unleased into the Astral Veil for a
                        prolonged period of time, returning to lay waste to Io
                        after hunting down Elenora Mordove and her friends. The
                        threat of Kaasma Khara is the predominant conflict in
                        Act 2 of Phase 2 and is a central focus of the Astral
                        Academy, Goblins of Io and Miss Demeanor Campaigns.
                    </p>
                </div>
            </a>

            <a
                href="https://www.youtube.com/playlist?list=PLjMDIlamRhomqs4AGzLQw2u26ejHv16Qg"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.majorRow}>
                    <div className={styles.rowHeader}>
                        <h3 className="fs-500">The Shadow Invasion</h3>
                        <i class="fab fa-youtube"></i>
                    </div>

                    <p>
                        1500 years ago, the native Astari were wiped out in a
                        cataclysmic event, the Jupiter Incident. 1500 years,
                        their souls have spent lost in the Shadow Veil, being
                        gradually warped and driven insane. But even in the
                        darkest pits of that tenebrous prison, nothing could
                        extinguish the Astari's desire to reclaim their home.
                    </p>
                    <p>
                        Now, under the leadership of Asmodeus, the Lord of All
                        Shadows, a hoard of twisted fiends seek to break through
                        to Io once more. Asmodeus offers mortality a choice:
                        stand aside and let these reborn Devils take back their
                        home, or defy them and perish.
                    </p>
                    <p>
                        In the face of this ultimatum, a group of brave heroes
                        have banded together to repel the Shadow Invasion and
                        seal them away once again. With Io's future hanging in
                        the balance, this momentous battle is their only chance
                        to succeed, or all they have ever know will be lost to
                        the encroaching darkness.
                    </p>
                </div>
            </a>
            <h2 className="fs-650">The Gods of IO</h2>
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
            </div>
        </Section>
    );
};

export default MajorEventsSection;
