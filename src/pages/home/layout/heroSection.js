import styles from "./heroSection.module.scss";
import stylesPage from "../styles/style.module.scss";

import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";
import IoverseHeader from "../components/ioverseHeader";

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
                <IoverseHeader>
                    <h1 className={`fs-700 ${stylesPage.header}`}>Into The</h1>
                </IoverseHeader>
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
