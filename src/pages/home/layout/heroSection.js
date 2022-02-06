import styles from "./heroSection.module.scss";

import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";

import backgroundImage from "images/ioverse-background.png";
import logo from "images/ioverse-logo.png";

const HeroSection = (props) => {
    return (
        <Section
            style={{ backgroundImage: `url(${backgroundImage})` }}
            id={props.id}
            className={styles.hero}
        >
            <div className={styles["logo-container"]}>
                <h1 className="fs-700">Into The</h1>
                <img src={logo} alt="" />
                <div className={styles.heroLinks}>
                    <IconBtn link="https://www.youtube.com/watch?v=yfvopjShUBo&list=PLjMDIlamRhomM4ljfnstQaQ8CivQH76at">
                        IO Direct
                    </IconBtn>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
