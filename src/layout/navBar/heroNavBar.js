// local
import NavBar from "./navBar";

// shared
import HeroAnimation from "layout/components/heroAnimation";

// hooks
import useMediaQuery from "hooks/useMediaQuery";

const HeroNavBar = () => {
    const switchState = useMediaQuery("(min-width: 1100px)");

    if (switchState) {
        return (
            <HeroAnimation height="100px" orientation="top" zIndex="2">
                <NavBar />
            </HeroAnimation>
        );
    } else {
        return <NavBar />;
    }
};

export default HeroNavBar;
