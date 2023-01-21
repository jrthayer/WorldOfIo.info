import styles from "./heroSection.module.scss";

import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";
import IoverseHeader from "./components/ioverseHeader";
import DynamicLogo from "../../../../components/dynamicLogo";

import logo from "images/ioverse-logo.webp";

const HeroSection = (props) => {
    return (
        <Section type="transparent" features="fullscreen" id={props.id}>
            <div className={styles["logo-container"]}>
                <IoverseHeader>
                    <h1>Into The</h1>
                </IoverseHeader>
                <DynamicLogo
                    src={logo}
                    heightMax={"50vh"}
                    widthMax={"80vw"}
                ></DynamicLogo>
                <div className={styles.heroLinks}>
                    <IconBtn
                        link="https://www.youtube.com/watch?v=yfvopjShUBo&list=PLjMDIlamRhomM4ljfnstQaQ8CivQH76at"
                        primary="var(--color-primary-dark)"
                    >
                        IO Direct
                    </IconBtn>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
