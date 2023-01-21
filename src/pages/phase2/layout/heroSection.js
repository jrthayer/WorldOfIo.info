import styles from "./heroSection.module.scss";

import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";
import DynamicLogo from "components/dynamicLogo";

import logo from "images/IO-Logo.webp";

import links from "data/links";

let phase2Intro = links.find((link) => link.text === "Intro Video");
let phase2Playlist = links.find((link) => link.text === "Playlist");

const HeroSection = (props) => {
    return (
        <Section id={props.id} features="fullscreen" type="transparent">
            <div className={`${styles.contentContainer} ${styles.hero}`}>
                <h1 className="fs-700 color-white header-ioverse-gradient">
                    Phase 2
                </h1>
                <DynamicLogo src={logo} />
                <div className={styles.heroLinks}>
                    <IconBtn
                        link={phase2Intro.link}
                        primary="var(--color-primary-dark)"
                    >
                        {phase2Intro.text}
                    </IconBtn>
                    <IconBtn
                        link={phase2Playlist.link}
                        primary="var(--color-primary-dark)"
                    >
                        {phase2Playlist.text}
                    </IconBtn>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
