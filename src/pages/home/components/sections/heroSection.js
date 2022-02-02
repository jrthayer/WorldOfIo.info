import styles from "./heroSection.module.scss";

import Section from "components/containers/section";
import SocialBtn from "components/socialBtn";
import IconBtn from "components/iconBtn";

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
            <h1 className="fs-700 color-white shadow-text">Phase 2</h1>
            <img src={logo} alt="" />
            <div className={styles.heroLinks}>
                <IconBtn data={phase2Intro}></IconBtn>
                <IconBtn data={phase2Playlist}></IconBtn>
            </div>
        </Section>
    );
};

export default HeroSection;
