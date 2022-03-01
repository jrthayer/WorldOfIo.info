import styles from "./heroSection.module.scss";

import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";

import backgroundImage from "images/galaxy_2.jpg";

import logo from "images/IO-Logo.png";

import links from "data/links";

let phase2Intro = links.find((link) => link.text === "Intro Video");
let phase2Playlist = links.find((link) => link.text === "Playlist");

const HeroSection = (props) => {
    return (
        <Section
            style={{ backgroundImage: `url(${backgroundImage})` }}
            id={props.id}
            className={styles.hero}
        >
            <div className={styles.contentContainer}>
                <h1 className="fs-700 color-white shadow-text">Phase 2</h1>
                <img src={logo} alt="" />
                <div className={styles.heroLinks}>
                    <IconBtn link={phase2Intro.link}>
                        {phase2Intro.text}
                    </IconBtn>
                    <IconBtn link={phase2Playlist.link}>
                        {phase2Playlist.text}
                    </IconBtn>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
