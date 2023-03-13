//====== CSS Styles
import styles from "./heroSection.module.scss";

//====== Components
import Section from "components/containers/section";
import IconBtn from "components/buttons/iconBtn";
import DynamicLogo from "../../../../components/dynamicLogo";

//====== Data
// images
import logo from "images/ioverse-logo.webp";

const HeroSection = (props) => {
    return (
        <Section type="transparent" features="fullscreen" id={props.id}>
            <div className={styles["logo-container"]}>
                <h1 className={`header-ioverse`}>Into The</h1>
                <DynamicLogo
                    src={logo}
                    heightMax={"50vh"}
                    widthMax={"80vw"}
                ></DynamicLogo>
                <div className={styles.heroLinks}>
                    <IconBtn
                        link="https://www.youtube.com/watch?v=edpzm9XYmT0"
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
